import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const CommonLayout = () => {
  return (
    <div className="wrapper">
      <Outlet />
      {/* <Header />
      <div className="main">
        <Sidebar />
        <div className="main__page"></div>
      </div> */}
    </div>
  );
};

export default CommonLayout;
