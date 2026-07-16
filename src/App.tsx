import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SectionContainer } from './components/shared/SectionContainer';
import GallerySection from './components/gallery/GallerySection';

function App() {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main className="main-content" style={{ flexGrow: 1 }}>
        <SectionContainer background="white">
          <GallerySection />
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}

export default App;
