import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx";
import Temp from "./components/Temp.jsx";
import Register from "./components/Register.jsx";

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

