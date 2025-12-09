import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Typography } from "@mui/material";

interface AlbumInfoProps {
  open: boolean;
  onClose: () => void;
  artist: string;
  date: string;
  description: string;
}

export default function AlbumInfoPopup({
  open,
  onClose,
  artist,
  date,
  description,
}: AlbumInfoProps) {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogContent>
          <Typography> Artist: {artist}</Typography>
          <Typography> Release Date: {date} </Typography>
          <Typography mt={2}>Descriptions: </Typography>
          <Typography>{description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
