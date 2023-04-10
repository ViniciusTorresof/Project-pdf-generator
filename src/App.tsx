import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/config/gloalStyle";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { RoutesPages } from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesPages />
      </BrowserRouter>
    </ThemeProvider>
  )
}

