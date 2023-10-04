import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenseAction } from "../../store/expense/expense-slice";

function ExpenseInput() {
  const dispatch = useDispatch();
  //지출이름 관리
  const [name, setName] = useState("");
  //지출 금액 관리
  const [price, setPrice] = useState(0);

  function submit(e) {
    e.preventDefault();
    dispatch(addExpenseAction({ name: name, price: price }));
    //payload를 전달
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>
          지출 상품 명:
          <input
            type="text"
            placeholder="예: '사과'"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          지출 상품 금액:
          <input
            type="number"
            placeholder="예: 1000"
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button type="submit">추가</button>
    </form>
  );
}

export default ExpenseInput;
