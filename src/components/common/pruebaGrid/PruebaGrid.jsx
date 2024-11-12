import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const PruebaGrid = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "red" }}>Caja 1</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "blue" }}>Caja 2</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography
          variant="h5"
          sx={{
            backgroundColor: { xs: "peru", sm: "steelblue", md: "purple" },
            padding: { xs: "10px", sm: "20px" },
            display: { xs: "block", sm: "none" },
          }}
        >
          Caja 3
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PruebaGrid;
