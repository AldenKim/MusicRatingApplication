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
import { signUp } from "../../../server/services/AuthService";
import { supabase } from "../../../server/db/supabaseClient";
import { fetchUserProfile } from "../../../server/services/UserService";

const Register = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserInfoContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    const result = await signUp(username, email, password);
    if (!result || !result.user) {
      alert("Registration failed.");
      return;
    }

    const { user } = result;

    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();
    if (sessionError) {
      console.error("Session error:", sessionError.message);
      alert("Error getting session.");
      return;
    }

    const session = sessionData.session;
    if (!session) {
      alert("No active session returned after signup.");
      return;
    }

    const profile = await fetchUserProfile();
    if (!profile) {
      alert("Failed to load user profile.");
      return;
    }

    localStorage.setItem("authToken", session.access_token);
    localStorage.setItem("username", profile.username);
    localStorage.setItem("email", user.email ?? "");

    setUserInfo?.({
      authToken: session.access_token,
      username: profile.username,
      email: user.email,
    });

    navigate("/explore");
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
