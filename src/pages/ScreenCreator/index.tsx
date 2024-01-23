// @ts-nocheck
import { Fragment, createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import Canvas from "./Canvas";
import EditPanel from "./EditPanel";
import { MdExpandCircleDown, MdHeight } from "react-icons/md";
import { Rect } from "@/app/types";
import { IoIosCloseCircle } from "react-icons/io";
import SaveModal from "./SaveModal";

export const ScreenCreatorContext = createContext(null);

type ScreenCreatorProps = {};

let _rects = {};

let _images = {};

let obj = {
  screens: {},
  images: _images,
};

const ScreenCreator = (props: ScreenCreatorProps) => {
  const [currentScreen, setCurrentScreen] = useState<any>(null);
  const [screens, setScreens] = useState<any>([]);
  const [rects, setRects] = useState<Rect[]>([]);

  const [expanded, setExpanded] = useState(false);

  const [canvasRect, setCanvasRect] = useState<DOMRect>();

  const [saving, setSaving] = useState<boolean>(false);

  const [flow, setFlow] = useState(null);

  const [activeRect, setActiveRect] = useState(null);

  function handleFileChange(e) {
    const { files } = e.target;

    const processFile = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target.result;
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
            _images[id] = img.src;

            if (!currentScreen) {
              setCurrentScreen(() => ({
                img,
                src: img.src,
                id,
              }));
            }
            resolve();
          };
        };
        reader.readAsDataURL(file);
      });
    };

    const processFilesSequentially = async () => {
      for (let i = 0; i < files.length; i++) {
        await processFile(files[i]);
      }
    };

    processFilesSequentially();
  }

  function handleClipboard(id: string) {
    navigator.clipboard.writeText(id);
    setExpanded(false);
  }

  function handleSave(e: any) {
    _rects[currentScreen.id] = [...rects];

    screens.forEach((screen) => {
      obj.screens[screen.id] = _rects[screen.id];
    });

    setSaving(true);
  }

  return (
    <ScreenCreatorContext.Provider value={{ rects, setRects }}>
      {saving && <SaveModal setSaving={setSaving} object={obj} />}
      <div className="noselect mt-8 flex w-full justify-center gap-4">
        <div className="max-w-2xl flex-1">
          {screens && screens.length > 0 && (
            <Canvas
              active={activeRect}
              rects={rects}
              setRects={setRects}
              image={currentScreen}
              canvasRect={canvasRect}
              setCanvasRect={setCanvasRect}
            />
          )}
        </div>
        <EditPanel setActiveRect={setActiveRect} />
      </div>
      <div className="container absolute z-50 flex w-full gap-4 bg-dark_gray">
        <div className="flex flex-shrink flex-col justify-between">
          <label
            htmlFor="screen"
            className="flex flex-1 items-center justify-center"
          >
            <input
              type="file"
              multiple
              id="screen"
              name="screen"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            />
          </label>
          {expanded && (
            <button
              className="rounded-sm bg-light_focus p-2"
              onClick={handleSave}
            >
              save
            </button>
          )}
        </div>
        {expanded && (
          <div className="flex flex-shrink flex-wrap gap-4">
            {screens.map((screen) => (
              <article key={screen.id} className="flex flex-col gap-2">
                <img
                  key={screen.id}
                  src={screen.src}
                  width="100px"
                  onClick={() => {
                    _rects[currentScreen.id] = [...rects];
                    setRects(_rects[screen.id]);
                    setCurrentScreen(screen);
                    setExpanded(false);
                  }}
                />
                <button
                  onClick={() => handleClipboard(screen.id)}
                  className="transition-opacity hover:underline active:bg-light_focus"
                >
                  {screen.id.substring(0, 8)}...
                </button>
              </article>
            ))}
          </div>
        )}
        <button
          className="absolute bottom-0 right-2 flex items-center justify-center"
          onClick={() => setExpanded((state) => !state)}
        >
          {expanded ? (
            <IoIosCloseCircle size={30} className="text-white_ish" />
          ) : (
            <MdExpandCircleDown size={30} className="text-white_ish" />
          )}
        </button>
      </div>
    </ScreenCreatorContext.Provider>
  );
};

export default ScreenCreator;
