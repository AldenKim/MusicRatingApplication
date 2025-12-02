import { Box, Typography } from "@mui/material";
import AnimatedComparisonCard from "./AnimatedComparisonCard";

function ComparisonPage() {
  const albumA = {
    name: "Blonde",
    image:
      "https://imgs.search.brave.com/03GD5u3P3_8hZK9sQn1yROUInnXknMLd8Bg1UMis0bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YmxvbmRlLWFsYnVt/LWNvdmVyLWluLXRo/ZS1oaWdoZXN0LXJl/c29sdXRpb24taS1n/dWVzcy12MC1rYnlu/ODh5YjlvcmUxLmpw/ZWc_Zm9ybWF0PXBq/cGcmYXV0bz13ZWJw/JnM9NTg4OGY5Mjli/MWI4YzhhNmJiNGVm/YjVkMDUwMzZmZGE4/MWU1ZDY5Mw",
  };

  const albumB = {
    name: "Freudian",
    image:
      "https://imgs.search.brave.com/Sh-EqWdpG89DwK0mKPpzFZ8UV4-Rhxg8gBPFAkIdcBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/YWI2NzYxNmQwMDAw/YjI3MzMxMzhmODkx/ZjMwNzVjOWM1ZDk0/NDAzNw",
  };

  return (
    <Box>
      <Typography variant="h4" align="center">
        Which Album Did You Prefer?
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <AnimatedComparisonCard
          image={albumA.image}
          name={albumA.name}
          direction="left"
          onSwipe={(dir) => {
            console.log("Swiped", dir);
          }}
        />
        <AnimatedComparisonCard
          image={albumB.image}
          name={albumB.name}
          direction="right"
          onSwipe={(dir) => {
            console.log("Swiped", dir);
          }}
        />
      </Box>
    </Box>
  );
}

export default ComparisonPage;
