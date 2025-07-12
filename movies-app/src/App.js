import './assests/css/App.css';
import NavBar from './components/NavBar';
import React from 'react';
export default function App() {
  const [title, setTitle] = React.useState('Movies App');
  function toggle(){
    setTitle((prev)=>(prev === "yes" ? "no" : "yes"));
  }
  return (
    <>
    <NavBar/>
    <div onClick={toggle}>
      {title}
    </div>
    </>
  );
}

