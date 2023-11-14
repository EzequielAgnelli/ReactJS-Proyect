import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { SecondHeroSection } from './components/HeroSection2';
import { MostFeatured } from './components/MostFeaturedSection';
import { GlobalStyles } from './styles/GeneralStyles';
import { Footer } from './components/Footer';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import AllProductsPage from './AllProductsPage'
// import MainPage from './main'

function App() {
return (
<Router>
        <GlobalStyles />
        <NavBar />
        <Routes>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/Lego Shop" element={<MainPage />} />  */}
            <Route path="/products" element={<AllProductsPage/>} />
            <Route path="/" element={
                <>
                    <HeroSection />
                    <SecondHeroSection />
                    <MostFeatured />
                    <Footer />
                </>
            } />
        </Routes>
</Router>
);
}

export default App;