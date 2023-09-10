import React from 'react';
import { ReactDOM } from 'react';
import './App.css'

const list = [
  { no: 1, area: "서울", visited: true },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];


function App() {
  let time = new Date();
  function Visited() {
    const array = list.map((element, index) => {
      return (
        <div>{element.no}번째, {element.area}에 방문을 {element.visited ? "했습니다." : "하지 않았습니다."}</div>
      )
    })

    return (
      <>
        {array}
      </>
    )
  }
  return (
    // <>
    //   {/* 안녕하세요 이게 주석입니다. */}
    //   <h1>안녕 라이켓!</h1>
    //   <h1 className='newClass'>잘가 라이켓!</h1>
    //   <input type="text" maxLength={false} style={{backgroundColor:"red"}}/>
    //   {/* 변수명은 중괄호로 {}써줘야함 */}
    //   {/* style속성은 중괄호안에 중괄호를 써주고 카멜케이스로 작성해야함 속성명은 ""로만 작성 */}
    // </>
    // <div>
    //   <h1 style={{ backgroundColor: "black", color: "white" }}>
    //     안녕 {함수() ? "Hello" : "Bye"}
    //   </h1>
    //   <h1>안녕, 라이캣 2호!</h1>
    //   <div className="newClass" />
    //   <div style={{ backgroundColor: "black", color: "white" }}>
    //     <h1 style={{ color: "red" }}>년: {time.getFullYear()}</h1>
    //     <h1>월/일: {time.getMonth() + 1}/{time.getDate()}</h1>
    //     <h1>시간: {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초</h1>
    //   </div>
    // </div>


    <h1>만나서 반가워!</h1>

  );
}
function 함수() {
  return true
}
export default App;