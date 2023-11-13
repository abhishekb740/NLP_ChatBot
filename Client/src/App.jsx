import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MetroChatBot from './pages/Home'
import { CssBaseline, Paper } from "@mui/material";

function App() {

  return (
    <>
    <CssBaseline/>
    <div style={{ background: 'linear-gradient(to bottom, #4c9baf, #d92bbf)', minHeight: '100vh'}}>
      <MetroChatBot/>
    </div>
    </>
  )
}

export default App
