import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound'; // Assuming you have a NotFound page
import CountryDescription from '../pages/CountryDescription/CountryDescription';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/country-description/:alpha3Code" element={<CountryDescription/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
