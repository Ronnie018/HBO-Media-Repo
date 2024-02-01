// @ts-nocheck

import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowLeft, FaArrowUp, FaCircle } from "react-icons/fa";

export default function WelcomeModalCreate() {
  const [tooltip, settooltip] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(() =>
    localStorage.getItem("first_time_create") ? 10 : 0,
  );

  if (currentSlide < 1)
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 p-4">
        {(() => {
          if (currentSlide === 0)
            return (
              <div>
                <div className="fadein flex w-4/5 flex-col justify-center">
                  <h1 className="text-3xl font-bold text-white">
                    Modo de Criação
                  </h1>
                  <p className="text-lg font-light text-white_ish">
                    Uma vez que você seleciona as capturas de tela, elas serão
                    listadas, você pode selecionar e definir os locais clicaveis
                    em cada uma, use o codigo abaixo de cada imagem para
                    vincular ao local clicavel.
                  </p>
                  <div className="flex justify-center">
                    <img src="/flow.gif" alt="demo" className="w-[500px]" />
                  </div>
                  <p className="text-lg font-light text-white_ish">
                    Após salvar, um objeto será baixado para o seu dispositivo.
                    Envie o arquivo para{" "}
                    <span
                      className="relative text-[#54c934] underline"
                      onMouseEnter={() => settooltip(true)}
                      onMouseLeave={() => settooltip(false)}
                    >
                      este email{" "}
                      {tooltip && (
                        <div className="tooltip absolute left-0 top-0 z-50 w-max rounded bg-black p-2 text-sm text-white">
                          gonzaga.501@teleperformance.com
                        </div>
                      )}
                    </span>
                    para que ele seja incluido na lista de processos.
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
