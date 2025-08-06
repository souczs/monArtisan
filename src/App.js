import main from './styles/main.scss';
import components from './styles/components.scss';
import pages from './styles/pages.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/404';
import ArtisansList from './pages/ArtisansList';
import ArtisansPage from './pages/ArtisansPage';

function App() {
    return (
        <Router>
            <Header />
            <div style={{ height: '120px' }}></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/artisans/:category" element={<ArtisansList />} />
                <Route path="/artisan/:name" element={<ArtisansPage />} />
            </Routes>
        </Router>
    )
}

export default App;
