import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDevices, getIcon } from "../hooks";

function Devices() {
  const { brand, kind, search_str } = useParams();

  const [devices] = useState(() => getDevices(kind, brand, search_str));

  return (
    <section className="flex flex-1 flex-col gap-4">
      {devices.map((device) => (
        <a href={`/${device.slug}`}>
          <article
            className="flex w-full justify-between rounded-md bg-blue_light p-4 text-lg text-white_ish hover:bg-light_focus focus:bg-light_focus active:bg-light_focus
        "
          >
            <span>{device.name}</span>
            <span>{getIcon(device.os, device.kind)}</span>
          </article>
        </a>
      ))}
    </section>
  );
}

export default Devices;
