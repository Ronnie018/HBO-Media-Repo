import { RiRemoteControl2Fill } from "react-icons/ri";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io";
import { MdDevicesOther } from "react-icons/md";
import { FaChromecast } from "react-icons/fa";
import { SiRoku } from "react-icons/si";
import { Device } from "./app/types";

export function getIcon(os: string, kind: string) {
  if (kind === "control") return <RiRemoteControl2Fill />;

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

const devices = [
  {
    name: "Samsung TV",
    brand: "Samsung",
    kind: "device",
    model: "SM-2000",
    os: "android",
    slug: "5ef16wer6rW6",
    id: 1,
  },
  {
    name: "Iphone 13",
    brand: "Apple",
    kind: "device",
    model: "Iphone 13",
    os: "ios",
    slug: "5ef16wr6rW6",
    id: 23,
  },
  {
    name: "Xiaomi Mi 5",
    brand: "Xiaomi",
    kind: "device",
    model: "MI 5",
    os: "android",
    slug: "5ef16wer6r6",
    id: 15,
  },
];

export function getDevices(
  kind = null,
  brand = null,
  search_str = null,
): Device[] {
  return devices.filter(
    (device) =>
      (kind === null || device.kind === kind) &&
      (brand === null || device.brand === brand) &&
      (search_str === null || device.name.toLowerCase().includes(search_str)),
  );
}
