// src/components/ProductList.js
import { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../api';

const InventoryList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        getProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product._id !== id));
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.product} - {product.status}
                        {/* <button onClick={() => onEdit(product)}>Edit</button> */}
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryList;
