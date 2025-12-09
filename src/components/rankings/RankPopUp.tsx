import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Grid, Typography } from "@mui/material";

interface RankPopupProps {
  open: boolean;
  onClose: () => void;
  notes: string;
  rating: number;
}

export default function RankPopup({
  open,
  onClose,
  notes,
  rating,
}: RankPopupProps) {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogContent>
          <Typography variant="h5">Your Ranking:</Typography>
          <Grid sx={{ marginLeft: "auto", marginRight: 2, mt: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                bgcolor: "grey.400",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {rating}
            </Box>
          </Grid>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Your Notes:
          </Typography>
          <Typography sx={{ mt: 1 }}>{notes}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
