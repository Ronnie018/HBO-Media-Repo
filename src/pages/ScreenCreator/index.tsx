// @ts-nocheck
import { Fragment, createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import Canvas from "./Canvas";
import EditPanel from "./EditPanel";
import { MdHeight } from "react-icons/md";

export const ScreenCreatorContext = createContext(null);

type Rect = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string | null;
};

type ScreenCreatorProps = {};

let _rects = {};

const ScreenCreator = (props: ScreenCreatorProps) => {
  const [currentScreen, setCurrentScreen] = useState<any>(null);
  const [screens, setScreens] = useState<any>([]);
  const [rects, setRects] = useState<Rect[]>([]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const id = uuid();
        setScreens((state) => [
          ...state,
          {
            img,
            src: img.src,
            id,
          },
        ]);
        _rects[id] = [];

        if (!currentScreen) {
          setCurrentScreen(() => ({
            img,
            src: img.src,
            id,
          }));
        }
      };
    };
    reader.readAsDataURL(file);
  }

  return (
    <ScreenCreatorContext.Provider value={{ rects, setRects }}>
      <label htmlFor="screen">
        <input
          type="file"
          id="screen"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />
      </label>
      <div className="flex flex-shrink flex-col flex-wrap gap-4">
        {screens.map((screen) => (
          <Fragment key={screen.id}>
            <img
              key={screen.id}
              src={screen.src}
              width="100px"
              onClick={() => {
                _rects[currentScreen.id] = [...rects];
                setRects(_rects[screen.id]);
                setCurrentScreen(screen);
              }}
            />
            <button
              onClick={() => navigator.clipboard.writeText(screen.id)}
              className="transition-opacity hover:underline active:bg-light_focus"
            >
              {screen.id.substring(0, 8)}...
            </button>
          </Fragment>
        ))}
      </div>
      {screens && screens.length > 0 && (
        <Canvas rects={rects} setRects={setRects} image={currentScreen} />
      )}
      <EditPanel />
    </ScreenCreatorContext.Provider>
  );
};

export default ScreenCreator;
