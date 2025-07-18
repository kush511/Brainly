
import Dashboard from './pages/Dashboard'
import { Signin } from './pages/Signin'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
