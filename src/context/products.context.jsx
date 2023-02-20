import {createContext, useEffect, useState} from 'react';
import DATA from './../shop-data.json';

export const ProductsContext = createContext({
    //data:[]
});

export const ProductsProvider = ({children}) => {

    const [data, setData] = useState(DATA);

    const value = {data};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}