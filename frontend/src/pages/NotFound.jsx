import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

const NotFound = () => {
  return (
   <>
    <Header/>
     <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >Page not found</Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Repellat voluptates exercitationem deserunt 
          in nemo perspiciatis fuga placeat distinctio, aperiam veniam soluta sequi adipisci, dicta dolores aliquid laudantium sapiente quo consectetur.
            </Typography>
           
          </Container>
        </Box>
    </>
  )
}

export default NotFound