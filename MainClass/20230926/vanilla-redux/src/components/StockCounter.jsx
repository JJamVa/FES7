import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { soldout, sale } from "../modules/stockCounter";

export default function StockCounter() {
  const { message } = useSelector((state) => {
    return {
      message: state.stockReducer.message,
    };
  });

  // store의 state 접근하도록 합니다.
  const { stock } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (stock <= 0) {
      dispatch(soldout());
    } else {
      dispatch(sale());
    }
  }, [stock]);

  return <p>{message}</p>;
}
