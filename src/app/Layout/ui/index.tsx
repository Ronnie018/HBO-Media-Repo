import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import ScreenViewer from "@/app/pages/ScreenViewer";
import ScreenCreator from "@/app/pages/ScreenCreator";

export default function () {
  return (
    <div className="h-screen bg-blue_dark">
      <Navbar />

      <main className="container mx-auto mt-16 flex flex-wrap gap-16">
        <Routes>
          <Route path="/*" element={<ScreenViewer />} />
          <Route path="/create" element={<ScreenCreator />} />
        </Routes>
      </main>
    </div>
  );
}
