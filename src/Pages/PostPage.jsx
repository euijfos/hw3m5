import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const [dataProduct, setDataProduct] = useState(null); // Изначально установим null

    const { product_id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${product_id}`);
                const responseData = await response.json();
                setDataProduct(responseData);
            } catch (error) {
                console.error(error);
            }
        };
        getProduct();
    }, [product_id]);

    return (
        <div>
            {dataProduct ? (
                <div >
                    <h1>{dataProduct.title}</h1>
                    <img src={dataProduct.images[0]} alt="" />
                    <h2>Price:{dataProduct.price}$</h2>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductPage;