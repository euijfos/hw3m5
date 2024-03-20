import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const CreateProductPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=100');
                const dataResponse = await response.json();
                setData(dataResponse.products);
            } catch (e) {
                console.error(e);
            }
        };
        getProduct();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data?.map((item) => (
                <div key={item.id} style={{ border: '4px solid yellow' }}>
                    <img width='200px' src={item.images[0]} alt="" />
                    <h1>{item.brand}</h1>
                    <Link to={`/product/${item.id}`} >перейти</Link>
                </div>
            ))}
        </div>
    );
};

export default CreateProductPage;