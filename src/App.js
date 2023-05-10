import React,{useState} from "react";
import ExpenseSection from "./components/Expenses/ExpenseSection";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
  let addedExpense
  
  const [expenses,setExpenses]=useState([
    { title: "new house", price: 300, date: new Date(2020,2,12),id:1},
    { title: "car insurance", price: 500, date:new Date(2022,11,11),id:2},
    { title: "groceries", price: 200, date: new Date(2021,7,23),id:3},
    { title: "furniture", price: 110, date: new Date(2023,1,18),id:4},
    { title: "miscellaneous", price: 150, date: new Date(2022,4,27),id:5}
  ])
  function addExpenseHandler(expense){
    addedExpense={...expense,id:Math.random().toString()}
    setExpenses([{...addedExpense},...expenses])  
    console.log(expenses);
  }

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseSection expenses={expenses}/>
    </div>
  );
}

export default App;
