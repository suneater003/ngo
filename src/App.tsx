import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/homepage/Hero';
import Mission from './components/homepage/Mission';
import Projects from './components/homepage/Projects';
import GallerySection from './components/gallery/GallerySection';
import Teams from './components/homepage/Teams';

function App() {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main className="main-content" style={{ flexGrow: 1 }}>
        <Hero />
        <Mission />
        <Projects />
        <GallerySection />
        <Teams />
      </main>
      <Footer />
    </div>
  );
}

export default App;
