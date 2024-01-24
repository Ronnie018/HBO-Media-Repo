// @ts-nocheck
import { ChangeEvent, Dispatch, useContext } from "react";
import { Rect, ScreenCreatorContext } from ".";

const EditPanel = ({
  setActiveRect,
}: {
  setActiveRect: Dispatch<React.SetStateAction<string | null>>;
}) => {
  const { rects, setRects } = useContext<{
    rects: Rect[];
    setRects: Dispatch<React.SetStateAction<Rect[]>>;
  }>(ScreenCreatorContext);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            name: e.target.value as any,
          };
        }
        return r;
      }),
    );
  }

  function handleTopChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            y: e.target.value as any,
          };
        }
        return r;
      }),
    );
  }

  function handleLeftChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            x: e.target.value as any,
          };
        }
        return r;
      }),
    );
  }

  function handleWidthChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            width: e.target.value as any,
          };
        }
        return r;
      }),
    );
  }

  function handleHeightChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            height: e.target.value as any,
          };
        }
        return r;
      }),
    );
  }

  function handleLinkToChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            to: e.target.value,
          };
        }
        return r;
      }),
    );
  }

  function handleDeletion(id: string) {
    setRects((state) => state.filter((r) => r.id !== id));
  }

  return (
    <section className="flex max-h-[600px] w-[500px] resize-y flex-col gap-4 overflow-y-scroll">
      <form>
        {rects.map((rect) => (
          <div
            key={rect.id}
            onMouseOver={() => setActiveRect(rect.id)}
            onMouseLeave={() => setActiveRect(null)}
          >
            <label
              htmlFor={"name" + rect.id}
              className="w-15 flex justify-between gap-2"
            >
              Name:
              <input
                type="text"
                name={"name" + rect.id}
                id={"name" + rect.id}
                onChange={(e) => handleNameChange(e, rect.id)}
                className="w-40 rounded-sm bg-white_ish pl-4"
              />
            </label>
            <label
              htmlFor={"top" + rect.id}
              className="w-15 flex justify-between gap-2"
            >
              Top:
              <input
                type="number"
                step={0.5}
                name={"top" + rect.id}
                id={"top" + rect.id}
                onChange={(e) => handleTopChange(e, rect.id)}
                placeholder="Top"
                defaultValue={rect.y}
                className="w-40 rounded-sm bg-white_ish pl-4"
              />
            </label>

            <label
              htmlFor={"left" + rect.id}
              className="w-15 flex justify-between gap-2"
            >
              Left:
              <input
                type="number"
                step={0.5}
                name={"left" + rect.id}
                id={"left" + rect.id}
                onChange={(e) => handleLeftChange(e, rect.id)}
                placeholder="Left"
                defaultValue={rect.x}
                className="w-40 rounded-sm bg-white_ish pl-4"
              />
            </label>

            <label
              htmlFor={"width" + rect.id}
              className="w-15 flex justify-between gap-2"
            >
              Width:
              <input
                type="number"
                step={0.5}
                name={"width" + rect.id}
                id={"width" + rect.id}
                onChange={(e) => handleWidthChange(e, rect.id)}
                placeholder="Width"
                defaultValue={rect.width}
                className="w-40 rounded-sm bg-white_ish pl-4"
              />
            </label>

            <label
              htmlFor={"height" + rect.id}
              className="w-15 flex justify-between gap-2"
            >
              Height:
              <input
                type="number"
                step={0.5}
                name={"height" + rect.id}
                id={"height" + rect.id}
                onChange={(e) => handleHeightChange(e, rect.id)}
                placeholder="Height"
                defaultValue={rect.height}
                className="w-40 rounded-sm bg-white_ish pl-4"
              />
            </label>
            <label
              htmlFor={"linkto" + rect.id}
              className="w-15 flex justify-between gap-2"
            >
              Link to:
              <input
                type="text"
                name={"linkto" + rect.id}
                id={"linkto" + rect.id}
                onChange={(e) => handleLinkToChange(e, rect.id)}
                defaultValue={rect.to}
                className="w-40 rounded-sm bg-white_ish pl-4"
              />
            </label>
            <button
              className="bg-dark_gray p-2"
              onClick={() => handleDeletion(rect.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </form>
    </section>
  );
};

export default EditPanel;
