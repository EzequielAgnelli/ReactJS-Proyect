import './styles/App.css'
import NavBar from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import {SecondHeroSection} from './components/HeroSection2'
import { MostFeatured } from './components/MostFeaturedSection'
import { GlobalStyles } from  './styles/GeneralStyles'


function App() {
    return (
        <div>
            <GlobalStyles />
            <NavBar />
            <HeroSection />
            <SecondHeroSection />
            <MostFeatured />
        </div>
    );
}

export default App