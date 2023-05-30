import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const CommonLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="main__page">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
