import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import { Success } from './pages/Success';
import Error from './pages/error';
import React from 'react';
import { useState } from 'react';
import OrderSuccess from './pages/OrderSuccess';



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/success" element={<OrderSuccess/>}/>
          <Route path="/*" element={<Error/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
