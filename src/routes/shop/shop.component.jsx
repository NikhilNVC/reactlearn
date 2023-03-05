import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/categoryPreview.componnet';
import ProductCard from '../../components/product-card/product-card-component';
import { CategoriesContext } from '../../context/categories.context';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );

}

export default Shop;