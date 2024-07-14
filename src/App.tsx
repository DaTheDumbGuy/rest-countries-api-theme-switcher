import { ThemeProvider } from "./hooks/ThemeProvider"
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
export default function App() {



  return (
    <>
      <ThemeProvider>
        <Header/>
        <AppRoutes/>
      </ThemeProvider>
    </>
  )
}
