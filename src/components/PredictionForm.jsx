import React, { useState } from 'react';
import './PredictionForm.css';

const PredictionForm = ({ onPredict, isLoading }) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productName.trim() && price) {
            onPredict(productName, price);
        }
    };

    return (
        <form className="prediction-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g. Sony WH-1000XM5"
                    required
                    disabled={isLoading}
                />
            </div>

            <div className="form-group">
                <label htmlFor="price">Price (₹)</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 25000"
                    required
                    min="0"
                    disabled={isLoading}
                />
            </div>

            <button type="submit" className="predict-btn" disabled={isLoading}>
                {isLoading ? 'Analyzing...' : 'Should I Buy?'}
            </button>
        </form>
    );
};

export default PredictionForm;
