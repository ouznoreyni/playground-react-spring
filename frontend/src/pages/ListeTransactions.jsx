import { Box, Button, Container, List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TransactionTable from '../components/TransactionTable';
import { Link as RouterLink } from 'react-router-dom';

const ListeTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    console.log('enter hook');
    async function fetchData() {
      setisLoading(true);
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        setTransactions(data);
        setisLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setisLoading(false);
      }
    }

    fetchData();
    return () => {};
  }, []);

  return (
    <>
      <Header />
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
            Liste des Transactions
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              bgcolor: 'background.paper',
            }}>
            {isLoading ? (
              <>Loading</>
            ) : (
              <TransactionTable key={'test'} transactions={transactions} />
            )}
          </Box>
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            color='info'
            variant='contained'
            component={RouterLink}
            to='/'>
            Retour Page D'accueil
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default ListeTransactions;
