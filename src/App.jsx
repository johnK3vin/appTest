import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/page/HomePage"
import TestSano from "./components/TestSano/TestSano"
import NavBar from "./components/NavBar/NavBar"
import TestMiedo from "./components/TestMiedo/TestMiedo"
import TestAnimal from "./components/TestAnimal/TestAnimal"
import NotFound from './NotFound'

function App() {
  return (
    <Router basename="/">
      <NavBar/>
      <Routes>
        <Route path='/appTest/' element={<HomePage/>}/>
        <Route path="/appTest/testSano" element={<TestSano/>}/>
        <Route path="/appTest/testMiedo" element={<TestMiedo/>}/>
        <Route path="/appTest/testTotemAnimal" element={<TestAnimal/>} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes> 
    </Router>
  )
}

export default App
