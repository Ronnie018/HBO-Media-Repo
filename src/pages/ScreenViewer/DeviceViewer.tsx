// @ts-nocheck
import { lazy, useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ScreenBuilder, { ScreenBuilderSelector } from "./ScreenBuilder";
import { NavLink } from "@/app/types";

function getNavigationFlow(deviceName?: string): Promise<{
  screens: { [key: string]: NavLink[] };
  images: { [key: string]: string };
}> {
  return import(`./data/flows/${deviceName}.json`);
}

function useWait(cb: () => Promise<any>) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await cb();
        setData(result);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cb]);

  return [loading, data];
}

const DeviceViewer = () => {
  const { device } = useParams();

  const [loading, flow] = useWait(() => getNavigationFlow(device));

  const homeId = Object.keys(flow?.screens || {})[0];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ScreenBuilder
            screen={flow?.screens[homeId]}
            image={flow?.images[homeId]}
          />
        }
      />
      <Route path="/:screen" element={<ScreenBuilderSelector flow={flow} />} />
    </Routes>
  );
};

export default DeviceViewer;
