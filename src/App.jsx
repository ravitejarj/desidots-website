import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import WhyUs from './components/WhyUs.jsx';
import ForVendors from './components/ForVendors.jsx';
import DownloadCTA from './components/DownloadCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Features />
        <WhyUs />
        <ForVendors />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
