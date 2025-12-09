import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../UserInfo/UserInfoContext";
import { useContext } from "react";
import albumd_logo from "/albumd_logo.png";
import ProfileDropdown from "./ProfileDropdown";
import { signOut } from "../../../server/services/AuthService";

function MainNavBar() {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserInfoContext);

  const handleLogout = async () => {
    await signOut();

    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    setUserInfo?.({ authToken: null, username: null, email: undefined });
    navigate("/login");
  };

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar sx={{ position: "relative" }}>
          <Box
            onClick={() => navigate("/rate")}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={albumd_logo}
              alt="Albumd Logo"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "12px",
              }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Albumd
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              flexGrow: 2,
              alignItems: "center",
            }}
          >
            <Button color="inherit" onClick={() => navigate("/explore")}>
              Explore
            </Button>
            <Button color="inherit" onClick={() => navigate("/comparison")}>
              Comparisons
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/rankings");
              }}
            >
              Rankings
            </Button>
          </Box>

          <Button
            sx={{
              color: "#1DB954",
              border: "1px solid #1DB954",
              "&:hover": {
                backgroundColor: "rgba(29,185,84,0.1)",
                borderColor: "#1ed760",
              },
              marginLeft: "auto",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
          <ProfileDropdown />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainNavBar;
