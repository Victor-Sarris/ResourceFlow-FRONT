import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultPage from './Default.jsx'
import Login from './Login.jsx'
import Cadastro from './Cadastro.jsx'
import DashBoard from './DashBoard.jsx' 
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rotas públicas */}
          <Route path='/' element={<DefaultPage />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
