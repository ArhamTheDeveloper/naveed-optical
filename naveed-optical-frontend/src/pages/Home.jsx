import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
      </main>
      <Contact />
    </div>
  );
};

export default Home;
