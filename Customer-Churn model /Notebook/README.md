# Customer Churn — EDA & Model Development
This module focuses on data exploration, preprocessing, feature engineering, and model training for predicting customer churn.

# Dataset
### Source: https://www.kaggle.com/datasets/jayaantanaath/student-habits-vs-academic-performance
### File: Telco Customer Churn.csv

# Objective
    Understand customer behavior through data
    Identify key drivers of churn
    Build and evaluate machine learning models
    Prepare a production-ready model for deployment

# Project Structure
```bash
model/
├── dataset/              # Raw Telco churn dataset
├── Notebook/            # EDA, preprocessing, and model training
└── README.md
```
# Process
## Data Cleaning
The data was already cleaned so I didn't have to deal with missing values or any messy data

# Exploratory Data Analysis (EDA)
EDA was performed to understand feature distributions and their relationship with churn.

## Key Analyses Performed
### 1. Churn Distribution
    Checked class imbalance between churned vs retained customers
### 2. Tenure Analysis
    Customers with low tenure show significantly higher churn rates
### 3. Contract Type vs Churn
    Month-to-month contracts have the highest churn
    Long-term contracts improve retention
### 4. Charges Analysis
    Higher MonthlyCharges correlate with increased churn
    TotalCharges trends reflect tenure impact
### 5. Categorical Features
    Services like TechSupport and OnlineSecurity reduce churn likelihood

### Key Questions Explored
    What factors influence customer churn?
    How do contract types affect retention?
    Does tenure reduce churn probability?


# Feature Engineering
    Created meaningful numerical representations of categorical variables
    Ensured consistency between training and inference features
    Handled class imbalance using resampling techniques

# Model Training
 ## Models explored:
    Random Forest
    K-Nearest Neighbor(KNN)
    Naive Bayes Model
    Neural Network
## Final model:
    Random Forest selected due to better performance on non-linear patterns
    
# Model Evaluation
 ## Evaluation metrics used:
    Accuracy 80%
    ROC AUC 85%

# Key Insights
    Short-tenure customers are the most at risk
    Monthly contracts significantly increase churn probability
    High monthly charges contribute to customer dissatisfaction

    
## Tools Used
- Python
- Pandas
- Numpy
- Seaborn/Matplotlib
- Jupyter notebook


## License
- This project is for educational and portfolio purposes only.

# Author
  Bernard Worthy
  Machine Learning | Data analyst
