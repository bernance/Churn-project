import { useState } from 'react';
import { User } from 'lucide-react';
import { InputForm } from './components/InputForm';
import { PredictionResult } from './components/PredictionResult';
import { RecentPredictionsTable } from './components/RecentPredictionsTable';

export interface CustomerData {
  tenure: string;
  monthlyCharges: string;
  contractType: string;
  internetService: string;
  streamingServices: boolean;
}

export interface Prediction {
  customerId: string;
  tenure: number;
  monthlyCharges: number;
  prediction: 'Churn' | 'No Churn';
  probability: number;
  timestamp: Date;
}

function App() {
  const [currentPrediction, setCurrentPrediction] = useState<Prediction | null>(null);
  const [recentPredictions, setRecentPredictions] = useState<Prediction[]>([]);

  const handlePredict = async (data: CustomerData) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tenure: Number(data.tenure),
        monthly_charges: Number(data.monthlyCharges),
        contract: data.contractType,
        internet_service: data.internetService,
        streaming_services: data.streamingServices
      })
    });

    const result = await response.json();

    const prediction: Prediction = {
      customerId: `CUST${Math.floor(Math.random() * 9000) + 1000}`,
      tenure: Number(data.tenure),
      monthlyCharges: Number(data.monthlyCharges),
      prediction: result.prediction,
      probability: result.probability,
      timestamp: new Date()
    };

    setCurrentPrediction(prediction);
    setRecentPredictions(prev => [prediction, ...prev].slice(0, 5));

  } catch (error) {
    console.error("Prediction error:", error);
  }
};

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Churn Predictor</h1>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Input Form */}
          <InputForm onPredict={handlePredict} />

          {/* Right Side - Prediction Result */}
          <PredictionResult prediction={currentPrediction} />
        </div>

        {/* Recent Predictions Table */}
        <RecentPredictionsTable predictions={recentPredictions} />
      </main>
    </div>
  );
}

export default App;
