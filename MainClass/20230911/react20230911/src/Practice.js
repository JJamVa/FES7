import "./App.css";
import React from "react";

function App() {
  let score = prompt("점수를 입력해주세요.");
  return <Grade score={parseInt(score)} />;
}

function Grade({ score }) {
  return score >= 70 ? <Success score={score} /> : <Fail />
};

function Success(props) {
  return <h1>{props.score}점 입니다. 수강완료</h1>;
}

function Fail() {
  return (
    <h1>재수강 해주세요.</h1>
  );
}

export default App;