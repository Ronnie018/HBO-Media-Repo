import { Route, Routes } from "react-router-dom";
import DeviceViewer from "./DeviceViewer";

export default function Viewer() {
  return (
    <section className="aspect-video min-h-[24rem] flex-[2]">
      <Routes>
        <Route path="/" element={<div>Select a device to view</div>} />
        <Route path="/:device/*" element={<DeviceViewer />} />
      </Routes>
    </section>
  );
}
