import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
     <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography component={RouterLink} to="/" variant="h6" color="inherit" noWrap>
            Transaction
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header