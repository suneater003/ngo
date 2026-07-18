import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { BackgroundOrbs } from './components/layout/BackgroundOrbs';
import { Hero } from './components/homepage/Hero';

const Mission = lazy(() => import('./components/homepage/Mission'));
const Projects = lazy(() => import('./components/homepage/Projects'));
const GallerySection = lazy(() => import('./components/gallery/GallerySection'));
const Teams = lazy(() => import('./components/homepage/Teams'));
const Footer = lazy(() => import('./components/layout/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BackgroundOrbs />
      <Navbar />
      <main className="main-content" style={{ flexGrow: 1 }}>
        <Hero />
        <Suspense fallback={<div className="section-loader">Loading...</div>}>
          <Mission />
          <Projects />
          <GallerySection />
          <Teams />
        </Suspense>
      </main>
      <Suspense fallback={<div className="section-loader">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
