// @ts-nocheck

import { useEffect, useRef } from "react";
import { createNewRect, isInvalidRect, convertToPercentage } from "./utils";

type RectProps = {
  id: string;
  style: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
};

const Rect = ({ ...props }: RectProps) => {
  return <div {...props} />;
};

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
      }}
    />
  );
}

const Canvas = ({ rects, setRects }: { rects: any; setRects: any }) => {
  const canvasContainer = useRef(null);
  let canvasRect: DOMRect | null = null;
  let mouseDown = false;
  let drawing = false;
  let Rect;
  let cw, ch;

  let used = false;
  useEffect(() => {
    if (used || !window) return;
    used = true;
    canvasRect = canvasContainer.current.getBoundingClientRect();
    cw = canvasRect.width;
    ch = canvasRect.height;
  }, []);

  function reset() {
    mouseDown = false;
    drawing = false;
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

  /* END HANDLERS */

  return (
    <section
      ref={canvasContainer}
      className="out relative aspect-video min-h-[24rem] flex-[2]"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {rects.map((rect) => {
        return generateRect(rect, ch, cw);
      })}
    </section>
  );
};

export default Canvas;
