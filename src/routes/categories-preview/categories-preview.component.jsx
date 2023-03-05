import { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/categoryPreview.componnet';
import ProductCard from '../../components/product-card/product-card-component';
import { CategoriesContext } from '../../context/categories.context';

const CategoriesPreview = () => {

    const {categoriesMap} = useContext(CategoriesContext);
    return(
        <>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (<CategoryPreview key={title} title={title} products={products}/>);
                    
                })
            }
        </>
    );

}

export default CategoriesPreview;