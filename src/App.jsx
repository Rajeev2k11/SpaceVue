
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Chart from './components/Chart'
import Footer from './components/Footer'
import Login from './components/Login'
// import Login from './components/Login'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
 
  return (
    <>
     {/* <Login /> */}
     <Header />
     <Routes>
      <Route index element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/charts' element={<Chart />}/>
      
     </Routes>
    <Footer />
    </>
  )
}

export default App
