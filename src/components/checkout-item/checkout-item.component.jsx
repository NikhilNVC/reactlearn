import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const CheckOutItem = ({item}) => {
    const {productName, id, imageUrl, price, quantity} = item;
    const {clearItemFromCart, addItemToCart, deleteItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(item);
    const addItemHandler = () => addItemToCart(item);
    const deleteItemHandler = () => deleteItemFromCart(item);

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${productName}`}/>
            </div>
            <span className='name'>{productName}</span>
            <span className='quantity'>
                <div className='arrow' onClick={deleteItemHandler}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler} >&#10005;</div>
        </div>
    );
}

export default CheckOutItem;