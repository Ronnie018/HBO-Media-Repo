// @ts-nocheck

import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowLeft, FaArrowUp, FaCircle } from "react-icons/fa";

export default function WelcomeModalHome() {
  const [currentSlide, setCurrentSlide] = useState(() =>
    localStorage.getItem("first_time_home") ? 10 : 0,
  );

  if (currentSlide < 3)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        {(() => {
          if (currentSlide === 0)
            return (
              <div>
                <div className="fadein w-4/5">
                  <h1 className="text-3xl font-bold text-white">
                    Bem vindo ao HBO Media Repo
                  </h1>
                  <p className="text-lg font-light text-white_ish">
                    O objetivo desse projeto é criar um hub de dispositivos e
                    procedimentos baseados em capturas de tela.
                  </p>
                  <p>
                    <b>
                      A seguir, uma breve explicação das principais
                      funcionalidades:
                    </b>
                  </p>
                </div>
              </div>
            );

          if (currentSlide === 1)
            return (
              <div>
                <div className="fadein w-4/5">
                  <h1 className="text-3xl font-bold text-white">
                    Existem basicamente 2 modos de uso
                  </h1>
                  <ul>
                    <li className="flex items-center gap-2">
                      <FaCircle className="text-white_ish" size={12} />
                      Modo de visualização
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCircle className="text-white_ish" size={12} />
                      Modo de criação
                    </li>
                  </ul>
                  <p>
                    <b>
                      No momento, você está em modo de visualização. Explore as
                      opções e em seguida clique em Create para explorar o modo
                      de criação.
                    </b>
                  </p>
                </div>
              </div>
            );

          if (currentSlide === 2)
            return (
              <div>
                <div className="fadein absolute left-[36%] top-[10%]">
                  <FaArrowUp />
                  Filtro por categoria
                </div>
                <div className="fadein absolute left-[16%] top-[10%]">
                  <FaArrowUp />
                  Barra de pesquisa (Em construção)
                </div>
                <div className="fadein absolute left-[40%] top-[50%] flex gap-2">
                  <FaArrowLeft />
                  Processos e dispositivos
                </div>
                <div className="fadein absolute right-[14%] top-[10%] flex flex-col items-end">
                  <FaArrowUp />
                  <p>
                    <b>pagina inicial</b> e <b>modo de criação</b>
                  </p>
                </div>
              </div>
            );

          return null;
        })()}
        <button className="absolute right-8">
          <GrLinkNext
            size={30}
            className="text-white"
            onClick={() => {
              setCurrentSlide(currentSlide + 1);
            }}
          />
        </button>
      </div>
    );

  return localStorage.setItem("first_time_home", "true") && null;
}
