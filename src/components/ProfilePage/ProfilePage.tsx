import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useRef } from "react";
import { UserInfoContext } from "../UserInfo/UserInfoContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

function ProfilePage() {
  let { currentUser } = useContext(UserInfoContext);
  currentUser = "John Doe";
  const [image, setImage] = React.useState<string | null>(null);
  const placeholders = [1, 2, 3, 4, 5];

  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleChangeProfilePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        mt={2}
      >
        <Button onClick={openFilePicker}>
          <Avatar sx={{ width: 96, height: 96 }} src={image ?? undefined}>
            {!image && <AccountCircleIcon sx={{ fontSize: 80 }} />}
          </Avatar>
        </Button>

        <input
          type="file"
          accept="image/*"
          hidden
          ref={fileInputRef}
          onChange={handleChangeProfilePhoto}
        />

        <Typography variant="h4">{currentUser}</Typography>
        <Typography>temp@gmail.com</Typography>
      </Box>
      <Box width="100%" sx={{ mt: 2 }}>
        <Typography
          variant="h5"
          align="left"
          sx={{ borderBottom: 1, borderColor: "divider", pb: 1 }}
          gutterBottom
        >
          Recently Rated Songs:
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {placeholders.map((item) => (
            <Grid key={item}>
              {" "}
              {/* md={2.4} fits 5 items perfectly on a row (12 columns / 5 = 2.4) */}
              <Card sx={{ height: "100%" }}>
                {/* Empty Gray Box to simulate image */}
                <Box sx={{ height: 150, bgcolor: "grey.300" }} />

                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                  >
                    Empty Album
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ProfilePage;
