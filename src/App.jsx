import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home.jsx";
import Temp from "./components/Temp.jsx";
import Register from "./components/Register.jsx";
import Admin from "./components/Admin.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";
import Order from "./components/Order.jsx";
import Orders from "./components/Orders.jsx";
import Product from "./components/Product.jsx";
import Products from "./components/Products.jsx";
import Users from "./components/Users.jsx";

function App() {
  

  return (
    // <> <Home name="John" age={30} />
    // <Temp flag={true} />
    // </>

    <div>
      <h1>Cafe Front-end</h1>
      <Register/>
      <h3>This is Footer</h3>
    </div>
    
  )
}

export default App

