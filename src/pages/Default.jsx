// import tailwindcss from "@tailwindcss/vite";
import './Default.css'
import Logo from '../assets/Resource-Flow.png'; 
import { useNavigate } from 'react-router-dom';

function DefaultPage(){

  const navigate = useNavigate();
  const handleSelectLogin = () => {
    navigate('/Login');
  }
  const handleSelectSingUp = () => {
    navigate('/Cadastro');
  }

    return (
    <>
    <img src={Logo} alt="" className='logo-img' />
      <div className='background'>
        <div className='main'>
          <h1>Bem vindo(a) ao Resource Flow!</h1>
          <div className='sub-content'>
            <p>Uma plataforma intuitiva e simples para o agendamento de eventos em uma instituição de ensino.</p>
            <p>Comece fazendo o login na plataforma 🙂👇</p>
          </div>
          <div className='role-selection'>
            <button className='sing-up' onClick={handleSelectLogin}>Cadastrar-se</button>
            <button className='login' onClick={handleSelectSingUp}>Fazer Login</button>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-content'>
          <h3>&copy; todos os direitos reservados</h3>
          <div className='footer-nav'>
            <a href="https://victorsarris.netlify.app/" target='blank' rel='external'>Meu portifólio</a>
            <a href="https://www.linkedin.com/in/victorsarris/" target='blank' rel='external'>Linkedin</a>
            <a href="https://github.com/Victor-Sarris">GitHub</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultPage;