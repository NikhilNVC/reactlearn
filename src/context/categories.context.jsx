import {createContext, useEffect, useState} from 'react';
import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    //data:[]
    categoriesMap : {},
});

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=>{
        //addCollectionAndDocuments('categories',SHOP_DATA);

        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoryMap();
    },[]);

    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}