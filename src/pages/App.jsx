import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultPage from './Default.jsx'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
