import { ThemeProvider } from "./hooks/ThemeProvider"
import Header from "./components/Header/Header";
import Main from "./Main/Main";
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
