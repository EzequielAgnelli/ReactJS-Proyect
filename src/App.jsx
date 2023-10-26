import './styles/App.css'
import NavBar from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import {SecondHeroSection} from './components/HeroSection2'
import { MostFeatured } from './components/MostFeaturedSection'
import { GlobalStyles } from  './styles/GeneralStyles'
import { Footer } from './components/Footer'
import { VideoGamesSection } from './components/VideogamesSection'


function App() {
    return (
        <div>
            <GlobalStyles />
            <NavBar />
            <HeroSection />
            <SecondHeroSection />
            <MostFeatured />
            <VideoGamesSection />
            <Footer />

        </div>
    );
}

export default App