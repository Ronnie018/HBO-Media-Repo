// @ts-nocheck
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDevices, getIcon } from "../../hooks";
import classNames from "classnames";

function Devices() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useState(
    new URLSearchParams(location.search),
  );
  const os = searchParams.get("os");
  const search_str = searchParams.get("search_str");
  const [devices, setDevices] = useState(() => getDevices(os, search_str));
  
  useEffect(() => {
    setSearchParams(new URLSearchParams(location.search));
  }, [location.search]);

  useEffect(() => {
    setDevices(getDevices(os, search_str));
  }, [os, search_str]);

  function setStyle(type) {
    if (type === "app-flow") {
      return "bg-blue_light p-4 text-lg text-white_ish hover:bg-light_focus focus:bg-light_focus active:bg-light_focus";
    }

    if (type === "process") {
      return "bg-[#cfa03b] p-4 text-lg text-white_ish hover:bg-[#e3b147] focus:bg-[#e3b147] active:bg-[#e3b147]";
    }

    return "bg-blue_light p-4 text-lg text-white_ish hover:bg-light_focus focus:bg-light_focus active:bg-light_focus";
  }

  return (
    <section className="flex flex-1 flex-col gap-4">
      {devices.map((device) => (
        <Link to={`${device.id}`} key={device.id}>
          <article
            className={classNames(
              "flex w-full justify-between rounded-md",
              setStyle(device.type),
            )}
          >
            <span>{device.name}</span>
            <span>{getIcon(device.os)}</span>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Devices;
