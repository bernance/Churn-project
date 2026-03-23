import { useState } from 'react';
import { CustomerData } from '../App';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Button } from './ui/button';

interface InputFormProps {
  onPredict: (data: CustomerData) => void;
}

export function InputForm({ onPredict }: InputFormProps) {
  const [formData, setFormData] = useState<CustomerData>({
    tenure: '',
    monthlyCharges: '',
    contractType: '',
    internetService: '',
    streamingServices: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Enter Customer Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Tenure */}
        <div className="space-y-2">
          <Label htmlFor="tenure" className="text-sm text-gray-700">
            Tenure (months)
          </Label>
          <Input
            id="tenure"
            type="number"
            placeholder="e.g., 24"
            value={formData.tenure}
            onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
            className="rounded-lg border-gray-300"
            required
          />
        </div>

        {/* Monthly Charges */}
        <div className="space-y-2">
          <Label htmlFor="monthlyCharges" className="text-sm text-gray-700">
            Monthly Charges ($)
          </Label>
          <Input
            id="monthlyCharges"
            type="number"
            step="0.01"
            placeholder="e.g., 79.99"
            value={formData.monthlyCharges}
            onChange={(e) => setFormData({ ...formData, monthlyCharges: e.target.value })}
            className="rounded-lg border-gray-300"
            required
          />
        </div>

        {/* Contract Type */}
        <div className="space-y-2">
          <Label htmlFor="contractType" className="text-sm text-gray-700">
            Contract Type
          </Label>
          <Select
            value={formData.contractType}
            onValueChange={(value) => setFormData({ ...formData, contractType: value })}
            required
          >
            <SelectTrigger id="contractType" className="rounded-lg border-gray-300">
              <SelectValue placeholder="Select contract type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Month-to-month">Month-to-month</SelectItem>
              <SelectItem value="One year">One year</SelectItem>
              <SelectItem value="Two year">Two year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Internet Service */}
        <div className="space-y-2">
          <Label htmlFor="internetService" className="text-sm text-gray-700">
            Internet Service
          </Label>
          <Select
            value={formData.internetService}
            onValueChange={(value) => setFormData({ ...formData, internetService: value })}
            required
          >
            <SelectTrigger id="internetService" className="rounded-lg border-gray-300">
              <SelectValue placeholder="Select internet service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DSL">DSL</SelectItem>
              <SelectItem value="Fiber optic">Fiber optic</SelectItem>
              <SelectItem value="No">No internet service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Streaming Services */}
        <div className="flex items-center justify-between py-2">
          <Label htmlFor="streamingServices" className="text-sm text-gray-700">
            Streaming Services
          </Label>
          <Switch
            id="streamingServices"
            checked={formData.streamingServices}
            onCheckedChange={(checked) => setFormData({ ...formData, streamingServices: checked })}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 mt-6"
        >
          Predict Churn
        </Button>
      </form>
    </div>
  );
}
