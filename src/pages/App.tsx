import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "./DefaultPage.tsx";
import Login from "./Login.tsx"
import Cadastro from "./Cadastro.tsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Cadastro" element={<Cadastro/>} />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
