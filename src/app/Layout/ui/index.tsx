import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import ScreenViewer from "@/pages/ScreenViewer";
import ScreenCreator from "@/pages/ScreenCreator";

export default function () {
  const testArr = new Array(11).fill(0);

  return (
    <div className="h-screen bg-blue_dark">
      <Navbar />

      <main className="container mx-auto flex flex-wrap gap-16">
        <Routes>
          <Route path="/*" element={<ScreenViewer />} />
          <Route path="/create" element={<ScreenCreator />} />
          <Route
            path="/teste"
            element={
              <div className='flex flex-wrap'>
                {testArr.map((_, i) => (
                  <img src={"/model/" + (i + 1) + ".jpeg"} alt="" width={200} />
                ))}
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
