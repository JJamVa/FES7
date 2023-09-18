import React from "react";
import modalImg from "../../images/licat.png";

function modal() {
  return (
    <article id="modal">
      <div class="modal-wrap">
        <h2>화이팅 &#9829; &#9829; &#9829;</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={modalImg} alt="라이켓의 응원" />
        <button type="button" class="close">
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
      </div>
    </article>
  );
}

export default modal;
