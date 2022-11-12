import {Box, Button, Typography} from '@mui/material'
import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const handleClose = () => {
    tg.close()
  }

  return (
    <Box className="app">
      <Box>
        <Typography variant='h2' sx={{textAlign: "center"}}>Hi from mui</Typography>
        <Typography variant='h4'>{tg.initDataUnsafe?.user?.userName}</Typography>
      </Box>
      <Box  sx={{margin: '0 auto', width: '80%', display: 'flex', justifyContent: 'center'}} >
        <Button 
        variant='outlined'
        size='large'
        sx={{margin: '10px auto', background: 'var(--tg-theme-button-color)', color: 'var(--tg-theme-button-text-color)'}}
        onClick={handleClose}>close</Button>
        
      </Box>

    </Box>
  );
}

export default App;
