import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    const [user, setUser] = useState({ id: '', pw: '' });

    const Login = () => {
        if (user.id === 'hello@world.com' && user.pw === 'qwer1234') {
            alert('로그인 성공!');
            navigate('/mypage');
        } else {
            alert('아이디와 비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <>
            아이디 : <input onChange={(e) => setUser({ ...user, id: e.target.value })} />
            비밀번호 : <input onChange={(e) => setUser({ ...user, pw: e.target.value })} />
            <button onClick={() => Login()}>로그인</button>
        </>
    );
}

export default App;