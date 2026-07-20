import { Suspense, lazy } from 'react';
import { Hero } from '../components/homepage/Hero';

const Mission = lazy(() => import('../components/homepage/Mission'));
const Projects = lazy(() => import('../components/homepage/Projects'));
const GallerySection = lazy(() => import('../components/gallery/GallerySection'));
const Teams = lazy(() => import('../components/homepage/Teams'));

export const Home = () => {
  return (
    <main id="main-content" className="main-content" style={{ flexGrow: 1 }} tabIndex={-1}>
      <Hero />
      <Suspense fallback={<div className="section-loader" aria-live="polite">Loading...</div>}>
        <Mission />
        <Projects />
        <GallerySection />
        <Teams />
      </Suspense>
    </main>
  );
};
