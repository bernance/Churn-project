# Customer Churn Prediction System

A full-stack machine learning project that predicts customer churn using historical customer data. This project integrates data analysis, model development, and a deployed prediction interface.

# Project Overview
Customer churn is a critical problem in subscription-based businesses. This project aims to:
  - Identify customers likely to churn
  - Provide actionable insights from data
  - Serve predictions through a web interface

## Project Structure

```bash
Churn-Project/
├── backend/              # FastAPI backend for model serving
├── frontend/             # React frontend for user interaction
├── model/
│   ├── dataset/          # Raw dataset
│   └── notebooks/        # EDA, preprocessing, and model training
└── README.md
```
# Tech stack
  ## Machine Learning
    Python (Pandas, NumPy, Scikit-learn)
    Model: Random Forest / Logistic Regression (edit based on yours)
  ## Backend
    FastAPI (API for predictions)
  ## Frontend
    React (User interface)

# My Workflow
    Data Cleaning & Preprocessing
    Exploratory Data Analysis (EDA)  
    Feature Engineering
    Model Training & Evaluation
    Model Deployment via API
    Frontend Integration

# Model Performance
    Accuracy: 80%
    ROC AUC: 85%

# Key Insights
    Customers with high monthly charges are more likely to churn
    Long-term contract users churn less
    Tenure is strongly negatively correlated with churn

# How to run the project
  ## Clone the repository
    git clone https://github.com/bernance/Churn-project.git
    cd Churn-project
  ## Backend setup
    cd backend
    pip install -r requirements.txt
    uvicorn main:app --reload
  ## Frontend setup
    cd frontend
    npm install
    npm run dev


# Author
Bernard Worthy
Machine Learning Engineer | Data Analyst
