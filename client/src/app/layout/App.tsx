import Catalog from "../../features/catalog/catalog";
import { Container, CssBaseline, createTheme } from "@mui/material";
import Header from "./header";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

// const products = [
//   {name:'product1', price: 100.00},
//   {name:'product2', price: 200.00},
// ]

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType ==='light' ? '#eaeaea': '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Header darMode = {darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
          <Catalog />
      </Container>  
    </ThemeProvider>    
  );
}

export default App;
