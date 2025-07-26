import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Home} from "./Home"
import {Success} from "./Success"
import {Header} from "./Header" 
import { Checkout } from "./Checkout"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
