import React from "react";
import { TextField, Container, Box, Grid } from "@material-ui/core";

const Home = () => {
  return (
    <Box marginTop="1.5rem" marginBottom="1.5rem">
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              autoComplete="cc-number"
              variant="outlined"
              label="Número de tarjeta"
              name="cardnumber"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              autoComplete="cc-exp"
              variant="outlined"
              label="Expiración"
              name="cardexpiration"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
