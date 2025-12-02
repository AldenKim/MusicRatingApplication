import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface ComparisonCardProps {
  name: string;
  image: string;
}

function ComparisonCard(props: ComparisonCardProps) {
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 3,
        boxShadow: 3,
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={props.image}
        alt={props.name}
        sx={{ objectFit: "cover", pointerEvents: "none" }}
      />

      <CardContent>
        <Typography variant="h6" align="center">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ComparisonCard;
