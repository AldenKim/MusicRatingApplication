import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const mockAlbums = [
  {
    name: "Blonde",
    image:
      "https://imgs.search.brave.com/03GD5u3P3_8hZK9sQn1yROUInnXknMLd8Bg1UMis0bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YmxvbmRlLWFsYnVt/LWNvdmVyLWluLXRo/ZS1oaWdoZXN0LXJl/c29sdXRpb24taS1n/dWVzcy12MC1rYnlu/ODh5YjlvcmUxLmpw/ZWc_Zm9ybWF0PXBq/cGcmYXV0bz13ZWJw/JnM9NTg4OGY5Mjli/MWI4YzhhNmJiNGVm/YjVkMDUwMzZmZGE4/MWU1ZDY5Mw",
  },
  {
    name: "Freudian",
    image:
      "https://imgs.search.brave.com/Sh-EqWdpG89DwK0mKPpzFZ8UV4-Rhxg8gBPFAkIdcBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/YWI2NzYxNmQwMDAw/YjI3MzMxMzhmODkx/ZjMwNzVjOWM1ZDk0/NDAzNw",
  },
  {
    name: "Dawn FM",
    image:
      "https://imgs.search.brave.com/6SzNgHxEgSupQdG8wk7O5qmCul3uRxQs7xWNFuaMb2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yi9iOS9UaGVfV2Vl/a25kXy1fRGF3bl9G/TS5wbmcvNTEycHgt/VGhlX1dlZWtuZF8t/X0Rhd25fRk0ucG5n",
  },
  {
    name: "21",
    image:
      "https://imgs.search.brave.com/gl4G7qvvWnBNhUiK3PU_irAz_5qoKvE72NT_kWfw8uY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRp/c2NvZ3MuY29tL0hO/VE1VcXJ2b0RrQ3pl/Zzk5dXdGNHJkRGtl/RVF6MW54Z1Ywdk9x/TW1fcWcvcnM6Zml0/L2c6c20vcTo0MC9o/OjMwMC93OjMwMC9j/ek02THk5a2FYTmpi/MmR6L0xXUmhkR0Zp/WVhObExXbHQvWVdk/bGN5OVNMVEkyTmpR/MS9PRGt0TVRRMU1q/STJPVGs1L05TMDNN/ams0TG5CdVp3Lmpw/ZWc",
  },
  {
    name: "IGOR",
    image:
      "https://imgs.search.brave.com/1h3jvK0CQqbLrjTo51qosU_n2ikaet8e-zjoy2_Uwrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhl/bGZyYW1lLmRlc2ln/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMC9UeWxlci10/aGUtQ3JlYXRvcl9J/R09SX0NvdmVyLUFy/dF9vcmlnaW5hbC5q/cGc",
  },
];

function RankPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Current Global Top 5 Albums
      </Typography>

      <Grid container spacing={3}>
        {mockAlbums.map((album) => (
          <Grid>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={album.image}
                alt={album.name}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {album.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Button variant="contained">Rank a new album +</Button>
      </Box>
    </>
  );
}

export default RankPage;
