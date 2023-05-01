import "./ExpenseDate.css"


function ExpenseDate(prop) {
  const month=prop.date.toLocaleString("en-US", { month: "long" }) 
  const day=prop.date.toLocaleString("en-US", { day: "2-digit" })
  const year=prop.date.getFullYear()
  return <div class="expense-date">
  <div class="expense-date__month">{month}</div>
  <div class="expense-date__year">{year}</div>
  <div class="expense-date__day">{day}</div>
</div>;
}
export default ExpenseDate;
