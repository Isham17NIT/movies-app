import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Provider, useSelector} from 'react-redux'
import store from './store/store'
import {ThemeProvider, CssBaseline, createTheme} from '@mui/material'
import darkTheme from './themes/darkTheme'
const ThemedApp = ()=>{
  const isDark = useSelector(state=>state.theme.isDark)
  return (
    <ThemeProvider theme={isDark ? darkTheme : createTheme()}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemedApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
