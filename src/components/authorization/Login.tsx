import logo from "../../assets/albumd_logo.png";
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const token = "fake-auth-token";
    localStorage.setItem("authToken", token);
    navigate("/dashboard");
    return token;
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            padding: 4,
            border: "1px solid #ccc",
            borderRadius: 3,
            boxShadow: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "background.paper",
          }}
        >
          <Typography variant="h5" sx={{ alignContent: "center" }}>
            Welcome to{" "}
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Albumd
            </Box>
          </Typography>
          <img
            src={logo}
            alt="Logo"
            style={{
              display: "block",
              margin: "0 auto",
              width: "125px",
              height: "125px",
            }}
          />
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container justifyContent={"flex-end"}>
              <Link style={{ textDecoration: "none" }} to="/register">
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFFF",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "#B3B3B3",
                    },
                  }}
                >
                  Don't have an account? Register
                </Typography>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
