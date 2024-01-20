import { IoLogoAndroid, IoLogoApple } from "react-icons/io";
import { MdDevicesOther } from "react-icons/md";
import { FaChromecast } from "react-icons/fa";
import { SiRoku } from "react-icons/si";
import { Device } from "./app/types";

export function getIcon(os: string) {
  switch (os) {
    case "android":
      return <IoLogoAndroid size={30} className="text-white_ish" />;
    case "ios":
      return <IoLogoApple size={30} className="text-white_ish" />;
    case "roku":
      return <SiRoku size={30} className="text-white_ish" />;
    case "chromecast":
      return <FaChromecast size={30} className="text-white_ish" />;
    default:
      return <MdDevicesOther size={30} className="text-white_ish" />;
  }
}

import deviceList from "./pages/ScreenViewer/data/deviceList.json";

export function getDevices(brand = null, search_str = null): Device[] {
  return (deviceList as Device[]).filter(
    (device) =>
      (brand === null || device.brand === brand) &&
      (search_str === null || device.name.toLowerCase().includes(search_str)),
  );
}