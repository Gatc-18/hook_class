import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import CategoriesApp from './components/GiftExpertApp/categoriesApp';
import ApiFetch from './components/rickAndMorty/apiFetch';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoriesApp/>
    {/* <ApiFetch/> */}
  </React.StrictMode>
);


