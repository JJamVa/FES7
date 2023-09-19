import React from "react";
import './Main.css'

const Main = () => {
  return (
    <main>
      <form className="cont-input">
        <p className="txt-wannabe">
          나는 <input type="text" placeholder="프로그래밍" /> 전문가가 될것이다.
        </p>
        <p className="txt-time">
          그래서 앞으로 매일 하루에 <input type="number" placeholder="5" />
          시간씩 훈련할 것이다.
        </p>
        <button className="btn-exc">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>
      <section>
        <h2 className="a11y">결과 확인</h2>
        <p className="txt-wannabe">
          당신은 <strong>프로그래밍</strong> 전문가가 되기 위해서
          <br />
          대략 <strong>1000일</strong> 이상 훈련하셔야됩니다.
        </p>
        <button type="button" className="btn-go">
          훈련하러가기 GO!GO!
        </button>
        <button type="button" className="btn-share">
          공유하기
        </button>
      </section>
    </main>
  );
};

export default Main;
