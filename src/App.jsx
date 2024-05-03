import { useState } from 'react'
import {  } from "../src/component/accueil";
import {  } from "module";
import './App.css'
import Pokenav from "../src/component/navBar.jsx";
import Caroussel from "../src/component/caroussel.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Pokenav/>
<Caroussel/>
    </>
  )
}

export default App
