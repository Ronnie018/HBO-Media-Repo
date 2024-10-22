// @ts-nocheck

import { useContext, useEffect, useRef, useState } from "react";
import {
  createNewRect,
  isInvalidRect,
  convertToPercentage,
  removeOrphans,
} from "./utils";
import { ScreenCreatorContext } from ".";

type RectProps = {
  id: string;
  style: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
};

const Rect = ({ ...props }: RectProps) => <div {...props} />;

type RectGenProps = {
  id: string;
  y: number;
  x: number;
  ch: number;
  cw: number;
  width: number;
  height: number;
};

function generateRect({ id, y, x, width, height, active }: RectGenProps) {
  return (
    <Rect
      id={id}
      key={id}
      style={{
        top: y + "%",
        left: x + "%",
        width: width + "%",
        height: height + "%",
        position: "absolute",
        outline: active ? "3px solid purple" : "2px dashed black",
        background: active && "#5910a254",
      }}
    />
  );
}

const Canvas = ({ image, canvasRect, setCanvasRect, active, props }: any) => {
  const { rects, setRects } = useContext(ScreenCreatorContext);

  const [client, setclient] = useState(0, 0);

  const canvasContainer = useRef(null);

  let mouseDown = false;
  let drawing = false;
  let Rect;

  useEffect(() => {
    if (!window) return;
    setCanvasRect(() => canvasContainer.current.getBoundingClientRect());
  }, [image]);

  function reset() {
    mouseDown = false;
    drawing = false;

    try {
      if (Rect) canvasContainer.current.removeChild(Rect);
    } catch (e) {}
  }

  /* HANDLERS */

  function handleMouseUp() {
    if (isInvalidRect(Rect)) return;

    setRects((state) => [
      ...state,
      {
        id: Rect.id,
        x: convertToPercentage(
          Rect.style.left.replace("px", ""),
          canvasRect.width,
        ),
        y: convertToPercentage(
          Rect.style.top.replace("px", ""),
          canvasRect.height,
        ),
        width: convertToPercentage(
          Rect.style.width.replace("px", ""),
          canvasRect.width,
        ),
        height: convertToPercentage(
          Rect.style.height.replace("px", ""),
          canvasRect.height,
        ),
        name: null,
        to: null,
      },
    ]);

    reset();
  }

  const handleMouseLeave = () => {
    removeOrphans();
    !isInvalidRect(Rect) && reset();
  };

  function handleMouseDown(e) {
    Rect = createNewRect();
    canvasContainer.current.appendChild(Rect);
    mouseDown = true;
    Rect.style.top = e.clientY - canvasRect.top + "px";
    Rect.style.left = e.clientX - canvasRect.left + "px";
  }

  function handleMouseMove(e) {
    if (!mouseDown) return;
    drawing = true;

    let xp = e.clientX - canvasRect.left;
    let yp = e.clientY - canvasRect.top;

    Rect.style.height = yp - Rect.style.top.replace("px", "") + "px";
    Rect.style.width = xp - Rect.style.left.replace("px", "") + "px";
  }

  return (
    <>
      <section
        ref={canvasContainer}
        className="masked relative mx-auto h-fit w-fit"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={image.src}
          style={{
            width: image.img.width < image.img.height ? "220px" : "900px",
          }}
          alt="screen"
          className="pointer-events-none"
        />
        {rects.map(({ id, x, y, width, height }) => {
          const ch = canvasRect.height;
          const cw = canvasRect.width;

          return generateRect({
            id,
            x,
            y,
            width,
            height,
            active: id == active,
          });
        })}
      </section>
    </>
  );
};

export default Canvas;
