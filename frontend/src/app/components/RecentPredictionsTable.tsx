import { Prediction } from '../App';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface RecentPredictionsTableProps {
  predictions: Prediction[];
}

export function RecentPredictionsTable({ predictions }: RecentPredictionsTableProps) {
  if (predictions.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Predictions</h2>
      
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold text-gray-700">Customer ID</TableHead>
              <TableHead className="font-semibold text-gray-700">Tenure</TableHead>
              <TableHead className="font-semibold text-gray-700">Monthly Charges</TableHead>
              <TableHead className="font-semibold text-gray-700">Prediction</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {predictions.map((pred, index) => (
              <TableRow key={`${pred.customerId}-${index}`} className="hover:bg-gray-50">
                <TableCell className="font-medium text-gray-900">{pred.customerId}</TableCell>
                <TableCell className="text-gray-700">{pred.tenure} months</TableCell>
                <TableCell className="text-gray-700">${pred.monthlyCharges.toFixed(2)}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      pred.prediction === 'Churn'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {pred.prediction}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
