import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedText from './components/AnimatedText';
import About from './components/About';
import Collection from './components/Collection';
import './App.css'; // Import the CSS file for styles
import './i18n'; // Assuming i18n.js is in the src/ directory


function App() {
    const { t, i18n } = useTranslation();

    const switchLanguage = () => {
        const newLang = i18n.language === 'jp' ? 'en' : 'jp';
        i18n.changeLanguage(newLang);
    };

    return (
        <Router>
            <div className="app-container">
                <Link to="/about" className="panel left-panel">
                    <div className="panel-text">{t('about')}</div>
                </Link>
                <Link to="/collection" className="panel top-panel">
                    <div className="panel-text">{t('collection')}</div>
                </Link>
                <div onClick={switchLanguage} className="panel right-panel">
                    <div className="panel-text">{t('language')}</div>
                </div>
                <Link to="/" className="panel bottom-panel">
                    <div className="panel-text">{t('madeWithLove')}</div>
                </Link>
                <Routes>
                    <Route path="/" element={<AnimatedText />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/collection" element={<Collection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
