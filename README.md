# Customer Churn Prediction System

A full-stack machine learning project that predicts customer churn using historical customer data. This project integrates data analysis, model development, and a deployed prediction interface.

# Project Overview
Customer churn is a critical problem in subscription-based businesses. This project aims to:
  - Identify customers likely to churn
  - Provide actionable insights from data
  - Serve predictions through a web interface

# Project Structure
Churn-Project/
│
├── backend/                  # FastAPI backend for model serving
│
├── frontend/                 # React frontend for user interaction
│
├── Customer-churn model/
│   ├── dataset/              # Raw and cleaned data
│   ├── notebooks/            # EDA, preprocessing, model training
│
└── README.md

# Tech stack
  ## Machine Learning
    Python (Pandas, NumPy, Scikit-learn)
    Model: Random Forest / Logistic Regression (edit based on yours)
  ## Backend
    FastAPI (API for predictions)
  ## Frontend
    React (User interface)

# My Workflow
  - Data Cleaning & Preprocessing
  - Exploratory Data Analysis (EDA)
  - Feature Engineering
  - Model Training & Evaluation
  - Model Deployment via API
  - Frontend Integration

# Model Performance
  - Accuracy: 80%
  - ROC AUC: 85%

# Key Insights
  - Customers with high monthly charges are more likely to churn
  - Long-term contract users churn less
  - Tenure is strongly negatively correlated with churn
