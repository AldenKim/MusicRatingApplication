import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";

function MainLayout() {
  return (
    <>
      <MainNavBar />
      <div>
        <div style={{ padding: "16px", width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
