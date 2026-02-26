import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Welcome } from './Welcome'
import { LogIn } from './LogIn'
import { Profile } from './Profile1'
import { Signin } from './Signin'


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Welcome/>}></Route>
   <Route path='/login' element={<LogIn/>}></Route>
   <Route path='/signin' element={<Signin/>}></Route>
   <Route path='/profile1' element={<Profile/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
