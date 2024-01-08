// import { useParams } from "react-router-dom";

// function getNavigationFlow(device?: string): any {
//   return {};
// }

// const DeviceViewer = () => {
//   const { device } = useParams();

//   const flow = getNavigationFlow(device);

//   return <div>{}</div>;
// };

// export default DeviceViewer;

import Home from "./VModel/pages/Home";
import { Route, Routes, useParams } from "react-router-dom";
import Profile from "./VModel/pages/Profile";
import Account from "./VModel/pages/Account";
import Downloads from "./VModel/pages/Downloads";
import Language from "./VModel/pages/Language";
import Movies from "./VModel/pages/Movies";
import ProfileClassify from "./VModel/pages/ProfileClassify";
import Search from "./VModel/pages/Search";
import Settings from "./VModel/pages/Settings";
import SidebarCategories from "./VModel/pages/SidebarCategories";
import Sidebar from "./VModel/pages/Sidebar";

function getNavigationFlow(device?: string): any {
  return {};
}

const DeviceViewer = () => {
  const { device } = useParams();

  const flow = getNavigationFlow(device);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/home" element={<Home />} />
        <Route path="/language" element={<Language />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/profile_classify" element={<ProfileClassify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sidebar_categories" element={<SidebarCategories />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  );
};

export default DeviceViewer;
