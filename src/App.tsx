import { ThemeProvider } from "./hooks/ThemeProvider"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
export default function App() {



  return (
    <>
    <ThemeProvider>
    <Header/>
    <Home/>
    </ThemeProvider>
    </>
  )
}
