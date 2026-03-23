from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for all origins (for development purposes)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Loading model
data = joblib.load("churn_model.pkl")
model = data["model"]

# Input schema
class CustomerInput(BaseModel):
    tenure: float
    monthly_charges: float
    contract: str
    internet_service: str
    streaming_services: bool


#I converted some of these categorical columns to numerical values in the preprocessing step, so we need to ensure that the input data is in the correct format before making predictions. 
contract_mapping = {
    "Month-to-month": 0,
    "One year": 1,
    "Two year": 2
}

internet_mapping = {
    "DSL": 0,
    "Fiber optic": 1,
    "No": 2
}
# Output schema
class PredictionOutput(BaseModel):
    prediction: str
    probability: float

@app.post("/predict")
def predict(data: CustomerInput):

    input_data = np.array([[
        data.tenure,
        data.monthly_charges,
        contract_mapping[data.contract],
        internet_mapping[data.internet_service],
        1 if data.streaming_services else 0
    ]])

    pred = model.predict(input_data)[0]
    prob = model.predict_proba(input_data)[0][1]

    return {
        "prediction": "Churn" if pred == 1 else "No Churn",
        "probability": float(prob)
    }