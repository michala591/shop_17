// const cars = [{ car: "Honda", number: "1234567" }]

import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // URL of your json-server

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
};



