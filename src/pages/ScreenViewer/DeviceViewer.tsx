// @ts-nocheck
import { lazy, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ScreenBuilder, { ScreenBuilderSelector } from "./ScreenBuilder";
import { NavLink } from "@/app/types";

import flows from "./flows.json";

function getNavigationFlow(deviceName?: string): {
  screens: { [key: string]: NavLink[] };
  images: { [key: string]: string };
} {
  return import(`./flows/${deviceName}.json`);
}

const DeviceViewer = () => {
  const { device } = useParams();

  const flow = getNavigationFlow(device);

  const homeId = Object.keys(flow.screens)[0];

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ScreenBuilder
            screen={flow.screens[homeId]}
            image={flow.images[homeId]}
          />
        }
      />
      <Route path="/:screen" element={<ScreenBuilderSelector flow={flow} />} />
    </Routes>
  );
};

export default DeviceViewer;
