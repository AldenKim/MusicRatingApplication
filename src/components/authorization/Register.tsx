import logo from "/albumd_logo.png";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserInfoContext } from "../UserInfo/UserInfoContext";

const Register = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserInfoContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    const token = "fake-auth-token";
    localStorage.setItem("authToken", token);

    setUserInfo?.({
      authToken: token,
      currentUser: "exampleUser",
    });

    navigate("/dashboard");
    return token;
  };

  return (
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
        <Typography component="h1" variant="h5">
          Register
        </Typography>

        <Box component="form" onSubmit={handleRegister} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <TextField
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid>
              <Link to="/login" style={{ textDecoration: "none" }}>
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
                  Already have an account? Login
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
