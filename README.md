# money-manager-progressive-web-app

'money manager' is a personal income and expense tracker with offline functionalities and secure, persistent storage of sensitive data, achieved by using service workers, Web Crypto API and IndexedDB.

## Stack

| Frontend  | Backend               | Database  |
|-----------|-----------------------|-----------|
| React     | no dedicated backend  | IndexedDB |

### Frontend

**Technologies**

TypeScript, React, React Router, Recharts

### Database

![Models and ERD](https://github.com/mrtnstl/money-manager/blob/main/docs/models_and_erd.png "Models and ERD")

## About the Application

### Terminology

The app uses some terms that are quite straightforward but important to establish nonetheless.

**Profile**:
- A 'profile' is the collection of data that us used to identify the user and store their preferences.

**Project**:  
- A 'project' is a specific field of interest that the user wants to track, such as "personal" or "side hustle," for example.

**Cash Flow**:  
- 'Cash flow' refers to events of money in motion involving the user. There are two categories: "income" and "expense."