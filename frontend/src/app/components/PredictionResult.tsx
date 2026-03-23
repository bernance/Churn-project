import { Prediction } from '../App';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface PredictionResultProps {
  prediction: Prediction | null;
}

export function PredictionResult({ prediction }: PredictionResultProps) {
  if (!prediction) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Prediction Result</h2>
        <div className="flex items-center justify-center h-64 text-gray-400">
          <p>No prediction yet. Enter customer details to get started.</p>
        </div>
      </div>
    );
  }

  const isHighRisk = prediction.prediction === 'Churn';
  const probabilityPercent = Math.round(prediction.probability * 100);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Prediction Result</h2>
      
      <div className={`rounded-xl p-6 ${isHighRisk ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'}`}>
        <div className="flex items-center gap-3 mb-4">
          {isHighRisk ? (
            <AlertCircle className="w-8 h-8 text-red-600" />
          ) : (
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          )}
          <div>
            <p className="text-sm text-gray-600">Prediction</p>
            <p className={`text-2xl font-semibold ${isHighRisk ? 'text-red-700' : 'text-green-700'}`}>
              {prediction.prediction}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <p className="text-sm text-gray-600 mb-2">Probability</p>
          <div className="flex items-end gap-2">
            <p className={`text-4xl font-semibold ${isHighRisk ? 'text-red-600' : 'text-green-600'}`}>
              {probabilityPercent}%
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${isHighRisk ? 'bg-red-600' : 'bg-green-600'}`}
              style={{ width: `${probabilityPercent}%` }}
            />
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Customer ID: <span className="font-medium text-gray-900">{prediction.customerId}</span>
          </p>
        </div>
      </div>

      {/* Risk Interpretation */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-sm text-blue-800">
          {isHighRisk ? (
            <>
              <strong>High Risk:</strong> This customer is likely to churn. Consider retention strategies.
            </>
          ) : (
            <>
              <strong>Low Risk:</strong> This customer is likely to stay. Maintain current service quality.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
