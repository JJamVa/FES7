import React from "react";
import { useSelector } from "react-redux";

function ExpenseTotal() {
  const totalprice = useSelector((store) => {
    let price = store.expense.expenseList;
    return price.reduce((a,b) => a + b.price, 0);
  });

  const restMoney = useSelector((store) => {
    return store.expense.income;
  });

  return (
    <>
      <div>
        <span>총 지출</span>
        <span>원 {totalprice}</span>
      </div>
      <div>
        <span>잔액 : </span>
        <span>원 {restMoney - totalprice}</span>
      </div>
    </>
  );
}

export default ExpenseTotal;
