import './App.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';
//import Restaurant from './Component/Basics/Restaurant';
//import Todo from './Component/TODO/Todo';
//import Temp from './Component/Weather/Temp';
import Home from './Component/sid/Home';
import Blank from './Component/sid/Blank';


function App() {
  return (
    <div>
        {/* <Restaurant/> */}
        {/* <Todo/> */}
        {/* <Temp/> */}
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blank' element={<Blank/>}></Route>
        </Routes>
      </div>
        );
}

export default App;
