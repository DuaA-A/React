import './assests/css/App.css';
import NavBar from './components/NavBar';
import React from 'react';
export default function App() {
  const [title, setTitle] = React.useState('Movies App');
  function toggle(){
    setTitle((prev)=>(!prev));
  }
  return (
    <>
    <NavBar/>
      <div onClick={toggle}>
        <i className="fa-solid fa-star" style={{fontSize: "30px", color:title?"":"gold"}}></i>
      </div>
    </>
  );
}

