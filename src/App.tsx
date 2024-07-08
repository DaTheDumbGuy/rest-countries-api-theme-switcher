import { ThemeProvider } from "./hooks/ThemeProvider"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
export default function App() {



  return (
    <>
    <ThemeProvider>
    <Header/>
    <Main/>
    </ThemeProvider>
    </>
  )
}
