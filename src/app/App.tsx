import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
