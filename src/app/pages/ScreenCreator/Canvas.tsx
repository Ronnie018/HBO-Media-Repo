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

function generateRect({ id, y, x, width, height, ch, cw }: RectGenProps) {
  const left = convertToPercentage(x, cw);
  const top = convertToPercentage(y, ch);
  const widthPercent = convertToPercentage(width, cw);
  const heightPercent = convertToPercentage(height, ch);

  return (
    <Rect
      id={id}
      key={id}
      style={{
        top: top + "%",
        left: left + "%",
        width: widthPercent + "%",
        height: heightPercent + "%",
        position: "absolute",
        outline: "2px solid black",
      }}
    />
  );
}

const Canvas = ({ image, props }: any) => {
  const { rects, setRects } = useContext(ScreenCreatorContext);

  const canvasContainer = useRef(null);
  const [canvasRect, setCanvasRect] = useState<DOMRect>();

  let mouseDown = false;
  let drawing = false;
  let Rect;

  let used = false;
  useEffect(() => {
    if (used || !window) return;
    used = true;
    setCanvasRect(() => canvasContainer.current.getBoundingClientRect());
  }, []);

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
        x: Rect.style.left.replace("px", ""),
        y: Rect.style.top.replace("px", ""),
        width: Rect.style.width.replace("px", ""),
        height: Rect.style.height.replace("px", ""),
        name: null,
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
    <section
      ref={canvasContainer}
      className="masked relative h-fit w-fit flex-1"
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

        return generateRect({ id, x, y, width, height, ch, cw });
      })}
    </section>
  );
};

export default Canvas;
