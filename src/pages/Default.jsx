import Logo from "../assets/Resource-Flow.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Importacoes de particulas
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "../services/particles-config";

function DefaultPage() {
  const navigate = useNavigate();
  const handleSelectLogin = () => {
    navigate("/Login");
  };
  const handleSelectSingUp = () => {
    navigate("/Cadastro");
  };

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {/* Inicalizacao de particulas */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
      )}
      {/* Configurações gerais da página */}
      <div className="min-h-screen bg-[rgba(58,37,193,0.388)] text-white text-center flex flex-col items-center bg relative z-10">
        {/* Logo */}
        <img src={Logo} alt="" className="h-96 w-96 object-contain" />

        {/* Container background */}
        <div className="">
          <div className="background">
            {/* Conteudo principal */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold ">
                Bem vindo(a) ao Resource Flow!
              </h1>

              {/* Sub-conteudo */}
              <div className="m-5">
                <p>
                  Uma plataforma intuitiva e simples para o agendamento de
                  eventos em uma instituição de ensino.
                </p>
                <p>Comece fazendo o login na plataforma 🙂👇</p>
              </div>

              {/* Botoes */}
              <div className="flex p-5 g-5 space-x-5">
                <button className="bg-sky-600/80" onClick={handleSelectLogin} >
                  Cadastrar-se
                </button>
                <button className="bg-emerald-600/80" onClick={handleSelectSingUp}>
                  Fazer Login
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 mb-5">
          <div className="footer-content ">
            <h3 className="">&copy; Victor S. | 🔱🪽, todos os direitos reservados</h3>
            <div className="mt-2.5 space-x-2.5">
              <a
                href="https://victorsarris.netlify.app/"
                target="blank"
                rel="external"
                className="text-white no-underline mx-2.5 hover:underline"
              >
                Meu portifólio
              </a>
              <a
                href="https://www.linkedin.com/in/victorsarris/"
                target="blank"
                rel="external"
                className="text-white no-underline mx-2.5 hover:underline"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/Victor-Sarris"
                target="blank"
                external="external"
                className="text-white no-underline mx-2.5 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultPage;
