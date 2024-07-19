import { ThemeProvider } from "./hooks/ThemeProvider"
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import { CountryProvider } from "./hooks/CountryProvider";
export default function App() {

  console.log("App rendered")

  return (
    <>
      <ThemeProvider>
        <Header/>
        <CountryProvider>
          <AppRoutes/>
        </CountryProvider>
      </ThemeProvider>
    </>
  )
}
