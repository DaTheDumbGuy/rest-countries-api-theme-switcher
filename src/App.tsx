import { ThemeProvider } from "./hooks/ThemeProvider"
import Header from "./components/Header/Header"

export default function App() {
  return (
    <>
    <ThemeProvider>
    <Header/>
    </ThemeProvider>
    </>
  )
}
