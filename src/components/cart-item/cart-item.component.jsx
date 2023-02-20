import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const {productName ,quantity, price, imageUrl} = cartItem;
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${productName}`} />
            <div className='item-details'>
                <span className='name'>{productName}</span>
                <span className='price'>{quantity}* ${price}</span>
            </div>
            
        </div>
    );
}

export default CartItem;