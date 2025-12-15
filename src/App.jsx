import { useEffect, useState } from 'react';
import './App.css'
import LoadingScreen from './Components/LoadingScreen';
import Navbar from './Components/Navbar';
import MobileMenu from './Components/MobileMenu';
import Home from './Components/Section/Home';
import "./index.css";
import About from './Components/Section/About';
import Projects from './Components/Section/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Section/Contact';
import { Fade } from 'react-awesome-reveal';
import FollowCursor from './Components/Cursor/FollowCursor';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Fade/>
       {!isMobile && (
          <div className="hidden lg:block">
            <FollowCursor />
          </div>
        )}
    </div>
    </>
  )
}

export default App
