import React from 'react'
import PageOne from './components/PageOne';
import Home from './components/pages/Home'
import About from './components/pages/About'
// import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
       

    <div className="App">
      <BrowserRouter>
      <PageOne/>
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        {/* <Route path='services' element={<Services/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
