// @ts-nocheck
import { useContext } from "react";
import { ScreenCreatorContext } from ".";

const EditPanel = () => {
  const { rects, setRects } = useContext(ScreenCreatorContext);

  function handleNameChange(e, id) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            name: e.target.value,
          };
        }
        return r;
      }),
    );
  }

  function handleTopChange(e, id) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            y: e.target.value,
          };
        }
        return r;
      }),
    );
  }

  function handleLeftChange(e, id) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            x: e.target.value,
          };
        }
        return r;
      }),
    );
  }

  function handleWidthChange(e, id) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            width: e.target.value,
          };
        }
        return r;
      }),
    );
  }

  function handleHeightChange(e, id) {
    setRects((state) =>
      state.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            height: e.target.value,
          };
        }
        return r;
      }),
    );
  }

  function handleLinkToChange(e, id) {
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

  function handleDeletion(id) {
    setRects((state) => state.filter((r) => r.id !== id));
  }

  return (
    <section className="flex h-[800px] flex-1 flex-col gap-4 overflow-y-scroll">
      {rects.map((rect) => (
        <div key={rect.id}>
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
    </section>
  );
};

export default EditPanel;
