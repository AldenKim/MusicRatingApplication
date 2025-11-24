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

function MainNavBar() {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserInfoContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");

    setUserInfo?.({ authToken: null, currentUser: null });
    navigate("/login");
  };

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Box
            onClick={() => navigate("/rate")}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              flexGrow: 1,
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

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainNavBar;
