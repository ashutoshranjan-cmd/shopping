import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Electronics from './pages/Electronics'
import Wires from './pages/Wires'
import Contacts from './pages/Contacts'
import Feedbacks from './pages/Feedbacks'
import About from './pages/About'
import Layout from './layouts/Layout'
import Form from './pages/Form'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/electronics' element={<Electronics/>}/>
          <Route path='/wires' element={<Wires/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/feedbacks' element={<Feedbacks/>}/>
          <Route path='/forms' element={<Form/>}/>
          

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
