import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import ComparisonCard from "./ComparisonCard";

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

function ComparisonPage() {
  const [albums, setAlbums] = useState(mockAlbums.slice(0, 2));
  const [nextIndex, setNextIndex] = useState(2);

  const controlsA = useAnimation();
  const controlsB = useAnimation();

  const handleSwipe = (swiped: "A" | "B") => {
    if (swiped === "A") {
      controlsB.start({ x: 300, opacity: 0, transition: { duration: 0.3 } });
      controlsA.start({ x: 0, transition: { duration: 0.3 } });
    } else {
      controlsA.start({ x: -300, opacity: 0, transition: { duration: 0.3 } });
      controlsB.start({ x: 0, transition: { duration: 0.3 } });
    }

    setTimeout(() => {
      const nextAlbum = mockAlbums[nextIndex];
      if (!nextAlbum) {
        setAlbums([]);
        return;
      }

      if (swiped === "A") {
        setAlbums([albums[0], nextAlbum]);
      } else {
        setAlbums([nextAlbum, albums[1]]);
      }
      setNextIndex((prev: number) => prev + 1);

      controlsA.set({ x: 0, opacity: 1 });
      controlsB.set({ x: 0, opacity: 1 });
    }, 350);
  };

  if (albums.length < 2) {
    return (
      <Typography variant="h4" align="center">
        All Albums Compared, Rate More Albums to Compare More
      </Typography>
    );
  }

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
        <motion.div
          drag="x"
          animate={controlsA}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) handleSwipe("A");
          }}
          style={{ touchAction: "none" }}
        >
          <ComparisonCard {...albums[0]} />
        </motion.div>
        <motion.div
          drag="x"
          animate={controlsB}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100) handleSwipe("B");
          }}
          style={{ touchAction: "none" }}
        >
          <ComparisonCard {...albums[1]} />
        </motion.div>
      </Box>
    </Box>
  );
}

export default ComparisonPage;
