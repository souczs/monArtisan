import main from './styles/main.scss';
import components from './styles/components.scss';
import pages from './styles/pages.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/404';
import ArtisansList from './components/ArtisansList';


function App() {
    return (
        <Router>
            <Header />
            <div style={{ height: '90px' }}></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/artisans/:category" element={<ArtisansList />} />
            </Routes>
        </Router>
    )
}

export default App;
