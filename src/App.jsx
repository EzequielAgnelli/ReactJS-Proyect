import './styles/App.css'
import NavBar from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { GlobalStyles } from  './styles/GeneralStyles'

function App() {
    return (
        <div>
            <GlobalStyles />
            <NavBar />
            <HeroSection />
        </div>
    );
}

export default App