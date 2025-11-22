import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../UserInfo/UserInfoContext";
import { useContext } from "react";

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Albumd
          </Typography>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainNavBar;
