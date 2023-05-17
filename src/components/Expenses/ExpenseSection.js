import ExpenseItem from "./ExpenseItem";
import "./ExpenseSection.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function ExpenseSection(props) {
  let [chosenYear, setChosenYear] = useState("2020");
  function setYearHandler(chosenYear) {
    setChosenYear(chosenYear);
  }

  const filteredExpenses = props.expenses.filter(
    (expenses) => expenses.date.getFullYear().toString() === chosenYear
  );

  return (
    <div>
      <div>
        <ExpensesFilter selected={chosenYear} onSetYear={setYearHandler} />
      </div>
      <Card className="expenses">
        {filteredExpenses.map((singleItem)=>
        <ExpenseItem
          key={singleItem.id}
          title={singleItem.title}
          price={singleItem.price}
          date={singleItem.date}
        ></ExpenseItem>
)} )
      </Card>
    </div>
  );
}

export default ExpenseSection;
