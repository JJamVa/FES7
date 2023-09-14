import styled from "styled-components";

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.data.includes("챌린지") ? "200px" : "400px")};
`;

function Title({ title }) {
  return (<>
    <h2>{title}</h2>
    <hr />
  </>)
}

function MakeBtn(props) {
  return (
    <div>
      {props.array.map((e, i) => <button key={i}>{e}</button>)}
    </div>
  )
}

function Challenge(props) {
  let arr = ["초기화", "저장하기"]
  return (
    <CardDiv data={props.name}>
      <Title title={props.name}></Title>
      <MakeBtn array={arr}></MakeBtn>
    </CardDiv>
  )
}

function Service(props) {
  let arr = ["이미지 저장", "트위터", "페이스북"];
  return (
    <CardDiv data={props.name}>
      <Title title={props.name}></Title>
      <p>안녕하세요</p>
      <MakeBtn array={arr}></MakeBtn>
    </CardDiv>
  )
}


function App() {
  return (
    <>
      <Challenge name="챌린지 설정"></Challenge>
      <Service name="서비스 공유하기" ></Service>
    </>
  );
}

export default App;