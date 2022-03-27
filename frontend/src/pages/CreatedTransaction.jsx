import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Link as RouterLink } from 'react-router-dom';

const CreatedTransaction = () => {
  const [typeTransaction, setTypeTransaction] = React.useState('DEPOT');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setTypeTransaction(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const data = {
      numero: formData.get('number'),
      amount: formData.get('amount'),
      typeTransaction: formData.get('typeTransaction'),
    };

    if (!data.numero || !data.amount) {
      setError('Entrez des donnés svp');
      setOpen(true);
      return;
    }

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (responseData.error) {
        setError(responseData.errors[0].defaultMessage);
        setOpen(true);
        return;
      }
      navigate('/transactions');
    } catch (error) {
      setError('Une erreur est survenue');
      console.log(error);
      setOpen(true);
    }
  };

  return (
    <>
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
              Faire une Transaction
            </Typography>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity='error'
                sx={{ width: '100%' }}>
                {error}
              </Alert>
            </Snackbar>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='number'
                label='Numero telephone'
                name='number'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='amount'
                label='Montant'
                type='number'
                id='amount'
              />
              <FormControl fullWidth margin='normal'>
                <InputLabel id='demo-simple-select-label'>
                  Type transaction
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={typeTransaction}
                  label='Type transaction'
                  onChange={handleChange}
                  name='typeTransaction'>
                  <MenuItem value='DEPOT'>Depot</MenuItem>
                  <MenuItem value='RETRAIT'>Retrait</MenuItem>
                </Select>
              </FormControl>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                Envoyer
              </Button>
              <Button
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                color='warning'
                variant='contained'
                component={RouterLink}
                to='/'>
                annuler Transactions
              </Button>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  );
};

export default CreatedTransaction;
