import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";

function MainLayout() {
  return (
    <>
      <MainNavBar />
      <div>
        <div style={{ padding: "16px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
