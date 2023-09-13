import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/page/HomePage"
import TestSano from "./components/TestSano/TestSano"
import NavBar from "./components/NavBar/NavBar"
import TestMiedo from "./components/TestMiedo/TestMiedo"
import TestAnimal from "./components/TestAnimal/TestAnimal"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/test/emocional mente sano?" element={<TestSano/>}/>
        <Route path="/test/revela tu miedo" element={<TestMiedo/>}/>
        <Route path="/test/decubre animal totem" element={<TestAnimal/>} />
      </Routes> 
    </Router>
  )
}

export default App
