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
  const [type, setType] = useState("app-flow");

  let obj = {
    name,
    brand,
    model,
    os,
    type,
    id,
    flow: object,
  };

  function handleSave(e: any) {
    e.preventDefault();

    // Convert object to JSON string
    const jsonString = JSON.stringify(obj, null, 2);

    // Create a Blob with the JSON string
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${obj.name}.json`;

    // Append the link to the body and click it to trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the download link from the body
    document.body.removeChild(downloadLink);

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

      <label htmlFor="type">
        type
        <br />
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="app-flow">App flow</option>
          <option value="resolution">Process</option>
        </select>
      </label>

      <button className="rounded-sm bg-light_focus p-2" onClick={handleSave}>
        save
      </button>
    </form>
  );
};

export default SaveModal;
