import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound'; 
import CountryDescription from '../pages/CountryDescription/CountryDescription';

function AppRoutes() {
    console.log("App Routes Rendered")
    return (
        <Router basename='/rest-countries-api-theme-switcher'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/country-description/:alpha3Code" element={<CountryDescription/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
