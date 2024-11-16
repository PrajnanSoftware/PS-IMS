import axios from 'axios';

// Base URL for API
const API_URL = '/api/products';

// Fetch all products
export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new product
export const addProduct = async (productData) => {
    const response = await axios.post(API_URL, productData);
    return response.data;
};

// Update a product by ID
export const updateProduct = async (id, updatedData) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
};

// Delete a product by ID
export const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
