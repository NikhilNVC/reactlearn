
import Button from './../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = ()=>{
    const {cartItems } =  useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckout = ()=>{ navigate('/checkout') }
    
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                    (cartItems.map( (item)=>  <CartItem key={item.id} cartItem={item}/>)):
                    (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckout}>CHECK OUT</Button>
            
        </CartDropdownContainer>
    )
}

export default CartDropdown;