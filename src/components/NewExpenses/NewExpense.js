import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
 
function NewExpense(props){
    function saveExpenseHandler(singleExpense){
 const savedExpense={...singleExpense}
console.log(savedExpense);
props.onAddExpense(savedExpense)
    }
   
    return(
        <div className="new-expense">
<ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
        </div>
    )

}
export default NewExpense