import Logo from "../assets/Resource-Flow.png";
// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Importacoes de particulas
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "../services/particles-config";

// Importacoes de icones da bibioteca
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Cadastro() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const [checked, setChecked] = React.useState(false);

  const handleCheckedChange = () => {
    setChecked("checked");

  };

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

      {/* Configurações Gerais da página */}
      <div className="min-h-screen bg-[rgba(58,37,193,0.388)] text-white text-center flex flex-col items-center bg relative z-10">

        {/* Container Principal */}
        <div className="bg-transparent border-2 border-white rounded-2xl w-315 h-190 items-center justify-center m-3">
          {/* Container Content */}

          <div className="flex">

            {/* Conteudo secundario */}
            <div className="flex flex-col w-max items-center justify-center">
              <img src={Logo} alt="" className="h-150 w-150 object-contain" />
              <h3 className="font-bold m-10 mt-[-70px]">Como minha avó sempre dizia: "Vamos começar pelo começo".</h3>
            </div>
            
            {/* Conteudo principal */}
            <div className="bg-white rounded-2xl w-215 h-190">
              <h2 className="text-xl font-bold text-gray-800 text-center  mt-10">
                Para continuar, coloque seus dados a baixo
              </h2>

              {/* botoes de login */}
              <div className="m-20 flex gap-10 justify-center mb-[-15px]">
                <button className="text-black border-2 border-black p-3 w-70 rounded-[12px] flex gap-3 mb-10 cursor-pointer transition-all duration-300 hover:bg-black/10">
                  <FcGoogle size={24} />
                  Registrar-se com o Google
                </button>
                <button className="text-black border-2 border-black p-3 w-70 rounded-[12px] flex gap-3 mb-10 cursor-pointer transition-all duration-300 hover:bg-black/10">
                  <FaGithub size={24} />
                  Registrar-se com o GitHub
                </button>
              </div>

              {/* Campos de registro */}
              <div className="flex flex-col h-100% m-10">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Insira seu Nome aqui"
                  className="text-black p-3 m-3 border-2 border-b-slate-700 rounded-2xl"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Insira seu Email aqui"
                  className="text-black p-3 m-3 border-2 border-b-slate-700 rounded-2xl"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Insira sua Senha aqui"
                  className="text-black p-3 m-3 border-2 border-b-slate-700 rounded-2xl"
                />

                

              </div>
                <label htmlFor="" className="text-black flex  text-center content-center justify-center gap-3">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckedChange}
                  />
                  <p>Eu concordo com os <span className="text-blue-500 cursor-pointer hover:underline">termos e serviços</span> da plataforma.</p>
                </label>
                <button className="bg-purple-500 text-white p-4 w-50 m-10 cursor-pointer border-2 rounded-[7px] border-transparent hover:border-blue-700 transition-all duration-300 focus focus-visible: outline-2 outline-purple-800">
                  Registrar-se
                </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
