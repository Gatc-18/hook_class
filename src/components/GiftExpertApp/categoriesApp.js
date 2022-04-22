import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
import CategorieList from './categorieList';



const CategoriesApp = () => {

    const [categories, setCategories] = useState(['Horror']);
    const [busqueda, setBusqueda] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories([...categories,busqueda ]);
    }

    const handleChange = (e) => {
       setBusqueda(e.target.value);
    }

    
 
    const { Search } = Input;


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        onChange={handleChange}
                        enterButton="Search"
                        size="large"
                        
                    />
                </form>
            </div>

            <CategorieList data={categories} />


        </>
    )
}

export default CategoriesApp;