import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
