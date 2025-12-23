EXPENSE & INCOME TRACKER (VANILLA JAVASCRIPT)

A simple Expense and Income Tracker web application built using HTML, CSS, and JavaScript.
The app allows users to add income, add expenses, view expense history, calculate totals,
and maintain balance, all stored persistently using LocalStorage.


FEATURES

INCOME MANAGEMENT
- Add income amounts
- Automatically updates total income
- Stores income history in LocalStorage

EXPENSE MANAGEMENT
- Add expense amount with a reason
- Displays expense history
- Each expense has a remove (X) button
- Automatically updates total expense
- Deletes expense from:
  - UI
  - LocalStorage
  - Total expense calculation

BALANCE CALCULATION
- Balance = Total Income - Total Expense
- Updates dynamically whenever income or expense changes

PERSISTENT STORAGE
- Uses LocalStorage to store:
  - Income details
  - Expense details
  - Total income
  - Total expense
- Data remains even after page refresh


TECHNOLOGIES USED

- HTML
- CSS
- JavaScript (DOM Manipulation)
- Browser LocalStorage


DATA STRUCTURE (LOCALSTORAGE)

userincomedetails
[
  {
    "userincome": 5000,
    "incomedate": "21/09/2025"
  }
]

userexpensedetails
[
  {
    "id": 1695298300000,
    "userexpense": 200,
    "userexpensereason": "Food",
    "expensedate": "21/09/2025",
    "time": "10:30:45 AM"
  }
]

usertotalincome
5000

usertotalexpense
200


HOW THE APPLICATION WORKS

1. Income Submission
- User adds income
- Income is stored in an array
- Total income is updated
- Data is saved to LocalStorage
- UI updates instantly

2. Expense Submission
- User adds expense with reason
- Expense is stored with a unique ID
- Expense history is displayed
- Total expense is recalculated
- Data is saved to LocalStorage

3. Expense Deletion
- Expense card is removed from UI
- Expense data is removed from LocalStorage
- Total expense is recalculated
- Balance updates automatically


JAVASCRIPT CONCEPTS USED

- DOM Manipulation
- Event Listeners
- Array methods (push, filter, reduce)
- LocalStorage (getItem, setItem)
- Conditional rendering
- Dynamic UI updates


UI SECTIONS

- Income Input Form
- Expense Input Form
- Expense History Section
- Total Income Display
- Total Expense Display
- Balance Display


KNOWN LIMITATIONS

- Single-user application
- No authentication system
- No data export feature
- No charts or analytics


FUTURE ENHANCEMENTS

- Monthly expense summary
- Category-wise expense tracking
- Charts and graphs
- Edit expense feature
- Export data (CSV / PDF)
- Mobile responsive UI


LICENSE

This project is open-source and free to use for learning and personal projects.


AUTHOR
- Sunny Tiwari
- B.Tech - 1st Semester
- Learning Web Development
