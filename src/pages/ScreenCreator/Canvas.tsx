// @ts-nocheck

import { useContext, useEffect, useRef, useState } from "react";
import { createNewRect, isInvalidRect, convertToPercentage } from "./utils";
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

function generateRect({ id, y, x, width, height }: RectGenProps) {
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
        outline: "2px solid black",
      }}
    />
  );
}

const Canvas = ({ image, canvasRect, setCanvasRect, props }: any) => {
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

    if (Rect) {
      canvasContainer.current.removeChild(Rect);
    }
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

  function handleMouseLeave() {
    if (isInvalidRect(Rect)) return;
    canvasContainer.current.removeChild(canvasContainer.current.lastChild);

    reset();
  }

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
        className="masked relative h-fit w-fit mx-auto"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={image.src}
          style={{
            width: "300px",
          }}
          alt="screen"
          className="pointer-events-none"
        />
        {rects.map(({ id, x, y, width, height }) => {
          const ch = canvasRect.height;
          const cw = canvasRect.width;

          return generateRect({ id, x, y, width, height });
        })}
      </section>
    </>
  );
};

export default Canvas;
