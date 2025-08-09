import Admin from "./Components/Admin"
import {Routes , Route}  from 'react-router'


function App() {
  

  return (
    <>
  <Routes>
    <Route path="Admin" element={<Admin />} />
    <Route path="Code" element={<Code />} />
  </Routes>
    </>
  )
}
import { Form } from "react-router"
import Code from "./Components/Code"

export default App
