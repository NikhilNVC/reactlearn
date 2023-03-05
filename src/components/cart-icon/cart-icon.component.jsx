
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles';


const CartIcon = ()=>{
    const {showCheckout , setShowCheckout, quantity} =  useContext(CartContext);

    const toggleCheckout = () => (setShowCheckout(!showCheckout))
    return(
        <CartIconContainer onClick={toggleCheckout}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;