import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, TextField, Typography } from "@mui/material";

interface RateAlbumPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function RateAlbumPopup({ open, onClose }: RateAlbumPopupProps) {
  const [search, setSearch] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [image, setImage] = React.useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSubmitted(true);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <React.Fragment>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <img
            src={image || "/placeholder-image.png"} // default placeholder
            alt="album cover"
            style={{
              width: 150,
              height: 150,
              objectFit: "cover",
              borderRadius: 10,
              border: "1px dashed gray",
            }}
          />
          <Box sx={{ mt: 1 }}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-image"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="upload-image">
              <Button variant="outlined" component="span">
                Attach Album Photo
              </Button>
            </label>
          </Box>
        </Box>
        <DialogContent>
          <Box sx={{ display: submitted ? "none" : "block", mb: 2 }}>
            <TextField
              autoFocus
              fullWidth
              label="Search for an album"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Box>

          {submitted && (
            <Typography variant="h6" sx={{ py: 1 }}>
              {search || "No album entered"}
            </Typography>
          )}

          <Typography>Notes:</Typography>
          <TextField
            fullWidth
            multiline
            minRows={4}
            maxRows={8}
            variant="outlined"
            placeholder="Write your notes here..."
            sx={{
              mt: 1,
              "& .MuiInputBase-input": {
                fontSize: "1.1rem",
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
