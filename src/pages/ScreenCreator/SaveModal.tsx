//@ts-nocheck
import { Dispatch, useState } from "react";
import { v4 as uuid } from "uuid";

type Props = {
  setSaving: Dispatch<React.SetStateAction<boolean>>;
  object: any;
};

const SaveModal = ({ setSaving, object }: Props) => {
  let id = uuid();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [os, setOs] = useState("");

  let obj = {
    name,
    brand,
    model,
    os,
    flow: object,
    id,
  };

  function handleSave(e: any) {
    e.preventDefault();

    navigator.clipboard.writeText(JSON.stringify(obj, null, 2));

    setSaving(false);
  }

  return (
    <form className="absolute left-1/2 top-1/2 z-[60] flex translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-md bg-blue_light p-6">
      <label htmlFor="name">
        name
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="brand">
        brand
        <br />
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </label>

      <label htmlFor="model">
        model
        <br />
        <input
          type="text"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </label>

      <label htmlFor="os">
        os
        <br />
        <input
          type="text"
          id="os"
          value={os}
          onChange={(e) => setOs(e.target.value)}
        />
      </label>

      <button className="rounded-sm bg-light_focus p-2" onClick={handleSave}>
        save
      </button>
    </form>
  );
};

export default SaveModal;
