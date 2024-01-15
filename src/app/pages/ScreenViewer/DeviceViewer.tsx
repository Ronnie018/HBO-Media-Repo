// @ts-nocheck
import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ScreenBuilder, { ScreenBuilderSelector } from "./ScreenBuilder";
import { NavLink } from "@/app/types";

function getNavigationFlow(deviceName?: string): {
  [key: string]: NavLink[];
} {
  return {
    home: [
      {
        top: "4.5%",
        right: "3.5%",
        to: "profile",
        width: "6%",
        height: "3%",
      },

      {
        top: "4.5%",
        left: "3.5%",
        to: "sidebar",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "27%",
        to: "movies",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "27%",
        to: "downloads",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "7%",
        to: "search",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "7%",
        to: "home",
        width: "6%",
        height: "3%",
      },
    ],
    account: [
      {
        top: "4.5%",
        left: "3.5%",
        to: "settings",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "27%",
        to: "movies",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "27%",
        to: "downloads",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "7%",
        to: "search",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "7%",
        to: "home",
        width: "6%",
        height: "3%",
      },
    ],
    downloads: [
      {
        top: "4.5%",
        right: "3.5%",
        to: "profile",
        width: "6%",
        height: "3%",
      },

      {
        top: "4.5%",
        left: "3.5%",
        to: "sidebar",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "27%",
        to: "movies",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "27%",
        to: "downloads",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "7%",
        to: "search",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "7%",
        to: "home",
        width: "6%",
        height: "3%",
      },
    ],
    language: [
      {
        top: "4.5%",
        left: "3.5%",
        to: "settings",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "27%",
        to: "movies",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "27%",
        to: "downloads",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "7%",
        to: "search",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "7%",
        to: "home",
        width: "6%",
        height: "3%",
      },
    ],
    movies: [
      {
        top: "4.5%",
        right: "3.5%",
        to: "home",
        width: "6%",
        height: "3%",
      },

      {
        top: "4.5%",
        left: "3.5%",
        to: "sidebar",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "27%",
        to: "movies",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "27%",
        to: "downloads",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        right: "7%",
        to: "search",
        width: "6%",
        height: "3%",
      },

      {
        bottom: "2.5%",
        left: "7%",
        to: "home",
        width: "6%",
        height: "3%",
      },
    ],
    profile: [
      {
        top: "4.8%",
        right: "4%",
        to: "settings",
        width: "6%",
        height: "3%",
      },
      {
        top: "4.5%",
        left: "3.5%",
        to: "sidebar",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        left: "27%",
        to: "movies",
        width: "6%",
        height: "3%",
      },
      {
        top: "40.4%",
        left: "4%",
        to: "profile_classify",
        width: "36%",
        height: "3.6%",
      },
      {
        bottom: "2.5%",
        right: "27%",
        to: "downloads",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        right: "7%",
        to: "search",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        left: "7%",
        to: "home",
        width: "6%",
        height: "3%",
      },
    ],
    profile_classify: [
      {
        top: "3%",
        right: "0%",
        to: "profile",
        width: "100%",
        height: "75%",
      },
    ],
    search: [
      {
        top: "4.5%",
        right: "3.5%",
        to: "profile",
        width: "6%",
        height: "3%",
      },
      {
        top: "4.5%",
        left: "3.5%",
        to: "sidebar",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        left: "27%",
        to: "movies",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        right: "27%",
        to: "downloads",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        right: "7%",
        to: "search",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        left: "7%",
        to: "home",
        width: "6%",
        height: "3%",
      },
    ],
    settings: [
      {
        top: "4.5%",
        left: "3.5%",
        to: "profile",
        width: "6%",
        height: "3%",
      },
      {
        top: "10%",
        left: "2.6%",
        to: "account",
        width: "95%",
        height: "3.8%",
      },
      {
        top: "39.6%",
        left: "2.6%",
        to: "language",
        width: "95%",
        height: "3.8%",
      },
      {
        bottom: "2.5%",
        left: "27%",
        to: "movies",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        right: "27%",
        to: "downloads",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        right: "7%",
        to: "search",
        width: "6%",
        height: "3%",
      },
      {
        bottom: "2.5%",
        left: "7%",
        to: "home",
        width: "6%",
        height: "3%",
      },
    ],
    sidebar: [
      {
        top: "4.5%",
        left: "3.5%",
        to: "home",
        width: "6%",
        height: "3%",
      },
      {
        top: "39.2%",
        left: "3.5%",
        to: "sidebar_categories",
        width: "27%",
        height: "4%",
      },
      {
        top: "3%",
        left: "34.5%",
        to: "home",
        width: "65.5%",
        height: "97%",
      },
    ],
    sidebar_categories: [
      {
        top: "4.5%",
        left: "3.5%",
        to: "home",
        width: "6%",
        height: "3%",
      },
      {
        top: "3%",
        left: "34.5%",
        to: "home",
        width: "65.5%",
        height: "97%",
      },
    ],
  };
}

const DeviceViewer = () => {
  const { device } = useParams();

  const flow = getNavigationFlow(device);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ScreenBuilder screen={flow.home} image="home" device={device} />
        }
      />
      <Route
        path="/:screen"
        element={<ScreenBuilderSelector flow={flow} device={device} />}
      />
    </Routes>
  );
};

export default DeviceViewer;
