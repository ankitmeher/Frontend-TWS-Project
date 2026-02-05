
import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';
import { predictPurchase } from './api';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async (productName, price) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await predictPurchase(productName, price);

      if (data.error) {
        setError(data.error);
        return;
      }

      setResult(data);
    } catch (err) {
      setError('Failed to get prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TWS Buy Advisor</h1>
        <p>AI-powered price prediction for True Wireless Earbuds</p>
      </header>

      <main className="app-main">
        <PredictionForm onPredict={handlePredict} isLoading={loading} />

        {error && <div className="error-message">{error}</div>}

        <PredictionResult result={result} />
      </main>
    </div>
  );
}

export default App;
