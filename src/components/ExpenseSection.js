import ExpenseItem from "./ExpenseItem";
import "./ExpenseSection.css"
function ExpenseSection(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        item={props.expenses[0].item}
        price={props.expenses[0].price}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        item={props.expenses[1].item}
        price={props.expenses[1].price}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        item={props.expenses[2].item}
        price={props.expenses[2].price}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        item={props.expenses[3].item}
        price={props.expenses[3].price}
        date={props.expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        item={props.expenses[4].item}
        price={props.expenses[4].price}
        date={props.expenses[4].date}
      ></ExpenseItem>
    </div>
  );
}

export default ExpenseSection;
