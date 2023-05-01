
import ExpenseSection from "./components/ExpenseSection";
function App() {
  const expenses = [
    { item: "new house", price: 300, date: new Date(2020,2,12)},
    { item: "car insurance", price: 500, date:new Date(2022,11,11)},
    { item: "groceries", price: 200, date: new Date(2021,7,23)},
    { item: "furniture", price: 110, date: new Date(2023,1,18)},
    { item: "miscellaneous", price: 150, date: new Date(2022,4,27)}
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseSection expenses={expenses}/>
    </div>
  );
}

export default App;
