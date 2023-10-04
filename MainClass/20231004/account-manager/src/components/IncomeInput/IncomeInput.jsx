import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../../store/expense/expense-slice";

function IncomeInput() {
  const income = useSelector((store) => {
    return store.expense.income;
  });

  const dispatch = useDispatch();

  function setIncome(e) {
    dispatch(setIncomeAction(parseInt(e.target.value)));
  }

  return (
    <label>
      수입 입력
      <input
        type="number"
        defaultValue={income}
        placeholder="ex) 3000"
        onChange={setIncome}
      />
    </label>
  );
}

export default IncomeInput;
