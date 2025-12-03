import { Box, Grid, Typography } from "@mui/material";
import type { RankedAlbum } from "../../types/AlbumTypes";

const mockRankings: RankedAlbum[] = [
  {
    name: "Blonde",
    image:
      "https://imgs.search.brave.com/03GD5u3P3_8hZK9sQn1yROUInnXknMLd8Bg1UMis0bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YmxvbmRlLWFsYnVt/LWNvdmVyLWluLXRo/ZS1oaWdoZXN0LXJl/c29sdXRpb24taS1n/dWVzcy12MC1rYnlu/ODh5YjlvcmUxLmpw/ZWc_Zm9ybWF0PXBq/cGcmYXV0bz13ZWJw/JnM9NTg4OGY5Mjli/MWI4YzhhNmJiNGVm/YjVkMDUwMzZmZGE4/MWU1ZDY5Mw",
    ranking: 10,
  },
  {
    name: "Freudian",
    image:
      "https://imgs.search.brave.com/Sh-EqWdpG89DwK0mKPpzFZ8UV4-Rhxg8gBPFAkIdcBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/YWI2NzYxNmQwMDAw/YjI3MzMxMzhmODkx/ZjMwNzVjOWM1ZDk0/NDAzNw",
    ranking: 9.7,
  },
  {
    name: "Dawn FM",
    image:
      "https://imgs.search.brave.com/6SzNgHxEgSupQdG8wk7O5qmCul3uRxQs7xWNFuaMb2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yi9iOS9UaGVfV2Vl/a25kXy1fRGF3bl9G/TS5wbmcvNTEycHgt/VGhlX1dlZWtuZF8t/X0Rhd25fRk0ucG5n",
    ranking: 9.4,
  },
  {
    name: "21",
    image:
      "https://imgs.search.brave.com/gl4G7qvvWnBNhUiK3PU_irAz_5qoKvE72NT_kWfw8uY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRp/c2NvZ3MuY29tL0hO/VE1VcXJ2b0RrQ3pl/Zzk5dXdGNHJkRGtl/RVF6MW54Z1Ywdk9x/TW1fcWcvcnM6Zml0/L2c6c20vcTo0MC9o/OjMwMC93OjMwMC9j/ek02THk5a2FYTmpi/MmR6L0xXUmhkR0Zp/WVhObExXbHQvWVdk/bGN5OVNMVEkyTmpR/MS9PRGt0TVRRMU1q/STJPVGs1L05TMDNN/ams0TG5CdVp3Lmpw/ZWc",
    ranking: 8.9,
  },
  {
    name: "IGOR",
    image:
      "https://imgs.search.brave.com/1h3jvK0CQqbLrjTo51qosU_n2ikaet8e-zjoy2_Uwrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhl/bGZyYW1lLmRlc2ln/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMC9UeWxlci10/aGUtQ3JlYXRvcl9J/R09SX0NvdmVyLUFy/dF9vcmlnaW5hbC5q/cGc",
    ranking: 8.7,
  },
];

function RankingsPage() {
  return (
    <Box sx={{ pt: "64px", px: 2 }}>
      <Typography variant="h4">Your Album Rankings:</Typography>
      <Grid container direction="column" spacing={2} sx={{ mt: 2 }}>
        {mockRankings.map((album) => (
          <Grid
            key={album.name}
            container
            alignItems="center"
            spacing={2}
            sx={{ bgcolor: "#121212", padding: 1, borderRadius: 1 }}
          >
            <Grid>
              <Box
                component="img"
                src={album.image}
                alt={album.name}
                sx={{
                  width: 60,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />
            </Grid>

            <Grid
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">{album.name}</Typography>
            </Grid>

            <Grid sx={{ marginLeft: "auto", marginRight: 2 }}>
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
                {album.ranking}
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RankingsPage;
