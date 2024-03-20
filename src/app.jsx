import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import ProductsPage from '../src/pages/ProductPage';
import CreateProductPage from '../src/pages/CreateProductPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateProductPage />} />
                <Route path="/product/:product_id" element={<ProductsPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;