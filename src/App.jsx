import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, FullPageLoader } from './components';
// import { Works } from './components';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const timerTransition = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Begin transition 500ms after loading
      return () => clearTimeout(timerTransition);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {isLoading ? (
          <div className='fixed inset-0 z-50'>
            <FullPageLoader />
          </div>
        ) : null}
        <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
        </div>
        <div className={`relative z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
          <StarsCanvas />
        </div>
        
        <About />
        <Experience />
        <Works />
        <div className={`relative z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
