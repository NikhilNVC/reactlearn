import Button from "../button/button.component";
import './product-card-styles.scss';

const ProductCard = ({product})=>{
    const { productName, price,imageUrl } = product;
    console.log('product is ', product);
    return (
        <>
            <div className="product-card-container">
                <img src={imageUrl} alt={`${productName}`}/>
                <div className="footer">
                    <span className="name">{productName}</span>
                    <span className="price">{price}</span>
                </div>
                <Button buttonType='inverted'>Click To Add</Button>
            </div>
        </>
    );
}

export default ProductCard;