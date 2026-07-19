import { Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { BackgroundOrbs } from './components/layout/BackgroundOrbs';
import { Hero } from './components/homepage/Hero';
import { SmoothScroll } from './components/layout/SmoothScroll';

const Mission = lazy(() => import('./components/homepage/Mission'));
const Projects = lazy(() => import('./components/homepage/Projects'));
const GallerySection = lazy(() => import('./components/gallery/GallerySection'));
const Teams = lazy(() => import('./components/homepage/Teams'));
const Footer = lazy(() => import('./components/layout/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <SmoothScroll>
      <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <a href="#main-content" className="skip-link">मुख्य सामग्री पर जाएं (Skip to main content)</a>
        
        <BackgroundOrbs />
        <Navbar />
        <main id="main-content" className="main-content" style={{ flexGrow: 1 }} tabIndex={-1}>
          <Hero />
          <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
            <Mission />
            <Projects />
            <GallerySection />
            <Teams />
          </Suspense>
        </main>
        <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </SmoothScroll>
  );
}

export default App;
