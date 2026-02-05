import React from 'react';
import './PredictionResult.css';

const PredictionResult = ({ result }) => {
    if (!result) return null;

    const { prediction, confidence, confidence_level } = result;
    const isBuy = prediction.toLowerCase() === 'buy';

    return (
        <div className={`result-card ${isBuy ? 'buy' : 'wait'}`}>
            <h2>Recommendation</h2>
            <div className="prediction-badge">
                {prediction.toUpperCase()}
            </div>

            <div className="stats">
                <div className="stat-item">
                    <span className="label">Confidence Score</span>
                    <span className="value">{(confidence * 100).toFixed(1)}%</span>
                </div>
                <div className="stat-item">
                    <span className="label">Level</span>
                    <span className="value">{confidence_level}</span>
                </div>
            </div>

            <p className="summary">
                {isBuy
                    ? "This looks like a great deal based on our analysis!"
                    : "You might want to hold off for a better price."}
            </p>
        </div>
    );
};

export default PredictionResult;
