
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ()=>{
    const {showCheckout , setShowCheckout} =  useContext(CartContext);

    const toggleCheckout = () => (setShowCheckout(!showCheckout))
    return(
        <div className='cart-icon-container' onClick={toggleCheckout}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;