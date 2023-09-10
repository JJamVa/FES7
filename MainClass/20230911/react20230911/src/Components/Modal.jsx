import React from "react";
import "./Modal.css";
import { useState } from "react";

export default function Modal() {

  return (
    <div className="modal-backdrop" >
      <div className="modal">
        <h2>회원이 되신것을 환영합니다!</h2>
        <button onClick={() => {
            // setOpacity(true)
        }}>닫기</button>
      </div>
    </div>
  );
}
