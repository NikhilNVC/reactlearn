import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import './product-card-styles.scss';

const ProductCard = ({product})=>{
    const { productName, price,imageUrl } = product;
    //console.log('product is ', product);

    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = ()=> addItemToCart(product);
    return (
        <>
            <div className="product-card-container">
                <img src={imageUrl} alt={`${productName}`}/>
                <div className="footer">
                    <span className="name">{productName}</span>
                    <span className="price">{price}</span>
                </div>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Click To Add</Button>
            </div>
        </>
    );
}

export default ProductCard;