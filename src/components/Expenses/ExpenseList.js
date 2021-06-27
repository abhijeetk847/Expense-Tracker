import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let expensesContent = props.items;
  if (expensesContent.length === 0) {
    return <h2 className="expenses-list__fallback ">Found No Expenses.</h2>;
  }
  return (
    <ul className="expenses-list ">
      {expensesContent.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
