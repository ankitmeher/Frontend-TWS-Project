
const API_BASE_URL = 'http://127.0.0.1:8000'; // Adjustable if needed

/**
 * Sends product details to the prediction API.
 * @param {string} productName 
 * @param {number} price 
 * @returns {Promise<Object>} The prediction result.
 */
export const predictPurchase = async (productName, price) => {
    try {
        const response = await fetch(`${API_BASE_URL}/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_name: productName,
                price: Number(price),
            }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Prediction request failed:', error);
        throw error;
    }
};
