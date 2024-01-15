import { useState } from "react";
import Canvas from "./Canvas";

type ScreenCreatorProps = {};
const ScreenCreator = (props: ScreenCreatorProps) => {
  const [rects, setRects] = useState([]);

  return (
    <>
      <Canvas rects={rects} setRects={setRects} />

      <section className="flex flex-1 flex-col gap-4"></section>
    </>
  );
};

export default ScreenCreator;
