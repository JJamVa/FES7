import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link, useLocation, Outlet, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      라우트를 감싸줍니다. */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products/:id' element={<ProdcutDetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
function HomePage(){
  return <>HomePage</>
}
function Cart(){
  return <>Cart</>
}
function Users(){
  return <>Users</>
}
function ProdcutDetailPage(){
  const {id} = useParams()
  return <>products {id}번</>
}


export default App;
