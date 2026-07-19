import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Contact from '../components/Contact';

const ProductsPage = () => {
  return (
    <div className="font-sans antialiased text-gray-100 bg-ink">
      <Navbar />
      <main>
        <Products />
      </main>
      <Contact />
    </div>
  );
};

export default ProductsPage;
