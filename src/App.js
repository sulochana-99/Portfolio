import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import DarkMode from './DarkMode';


function App() {
  return (
    <div>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/darkmode' element={<DarkMode/>}/>
            </Routes>
       </BrowserRouter>
       
    </div>
  )
}

export default App;