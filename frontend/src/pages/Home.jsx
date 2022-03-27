import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}>
          <Container maxWidth='sm'>
            <Typography
              component='h3'
              variant='h3'
              align='center'
              color='text.primary'
              gutterBottom>
              Transaction
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='text.secondary'
              paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              voluptates exercitationem deserunt in nemo perspiciatis fuga
              placeat distinctio, aperiam veniam soluta sequi adipisci, dicta
              dolores aliquid laudantium sapiente quo consectetur.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction='row'
              spacing={2}
              justifyContent='center'>
              <Button
                variant='contained'
                component={RouterLink}
                to='/transactions'>
                Liste Transactions
              </Button>
              <Button
                variant='outlined'
                component={RouterLink}
                to='/transactions/create'>
                Faire une transaction
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default Home;
