import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import ScreenViewer from "@/pages/ScreenViewer";
import ScreenCreator from "@/pages/ScreenCreator";

export default function () {
  const mobileArr = new Array(11).fill(0);
  const desktopArr = new Array(14).fill(0);

  return (
    <div className="h-screen bg-blue_dark">
      <Navbar />

      <main className="container mx-auto flex flex-wrap gap-16">
        <Routes>
          <Route path="/*" element={<ScreenViewer />} />
          <Route path="/create" element={<ScreenCreator />} />
          {/* <Route
            path="/mobile"
            element={
              <div className="flex flex-wrap">
                {mobileArr.map((_, i) => (
                  <img
                    src={"/mobile/" + (i + 1) + ".jpeg"}
                    alt=""
                    width={200}
                  />
                ))}
              </div>
            }
          />*/}
          <Route
            path="/desktop"
            element={
              <div className="flex flex-wrap">
                {desktopArr.map((_, i) => (
                  <img
                    src={"/desktop/" + (i + 1) + ".png"}
                    alt=""
                    width={200}
                  />
                ))}
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
