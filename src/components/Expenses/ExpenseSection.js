import ExpenseItem from "./ExpenseItem";
import "./ExpenseSection.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function ExpenseSection(props) {
  let [chosenYear, setChosenYear]=useState('2020')
  function setYearHandler(chosenYear){
    setChosenYear(chosenYear);
  }
  
  return (
    <div >
<div>
  <ExpensesFilter selected={chosenYear} onSetYear={setYearHandler}/>
</div>
    <Card className="expenses">
      
      <ExpenseItem
        title={props.expenses[0].title}
        price={props.expenses[0].price}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        price={props.expenses[1].price}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        price={props.expenses[2].price}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        price={props.expenses[3].price}
        date={props.expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[4].title}
        price={props.expenses[4].price}
        date={props.expenses[4].date}
      ></ExpenseItem>
    
    </Card>
    </div>
  );
}

export default ExpenseSection;
