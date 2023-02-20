import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card-component';
import { ProductsContext } from '../../context/products.context';
import './shop.styles.scss';

const Shop = () => {

    const {data} = useContext(ProductsContext);
    console.log('data is: ', data);
    return(
        <div className='products-container'>
            {data?.map( (product) => 
                 
                { 
                    //console.log('product is:  ',{product});
                    return (<ProductCard key={product.id} product={product}/> )
                }

            )}            
        </div>
    );

}

export default Shop;