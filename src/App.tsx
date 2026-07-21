import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { BackgroundOrbs } from './components/layout/BackgroundOrbs';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { ScrollToHash } from './components/layout/ScrollToHash';
import { Home } from './pages/Home';

const TeamPage = lazy(() => import('./pages/TeamPage'));
const MissionPage = lazy(() => import('./pages/MissionPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectsPage = lazy(() => import('./components/projects/ProjectsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const Footer = lazy(() => import('./components/layout/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <Router>
      <ScrollToHash />
      <SmoothScroll>
        <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <a href="#main-content" className="skip-link">मुख्य सामग्री पर जाएं (Skip to main content)</a>
          
          <BackgroundOrbs />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={
              <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
                <TeamPage />
              </Suspense>
            } />
            <Route path="/mission" element={
              <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
                <MissionPage />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
                <ContactPage />
              </Suspense>
            } />
            <Route path="/projects" element={
              <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
                <ProjectsPage />
              </Suspense>
            } />
            <Route path="/gallery" element={
              <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
                <GalleryPage />
              </Suspense>
            } />
          </Routes>
          
          <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
