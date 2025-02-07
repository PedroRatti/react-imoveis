import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Favorites from './pages/favorites/favorites';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;