import { useState, useEffect } from 'react';
import { client, urlFor } from '../lib/sanityClient';
import { FaWhatsapp } from 'react-icons/fa';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const query = `*[_type == "product" && featured == true][0...4] {
          _id,
          name,
          category,
          price,
          image,
          inStock
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) return null; // Or a loading skeleton
  if (products.length === 0) return null; // Don't show if no featured products

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy">Featured Collection</h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {product.image ? (
                  <img 
                    src={urlFor(product.image).width(400).url()} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
                <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Featured
                </div>
                {!product.inStock && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Out of Stock
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="text-xl font-bold text-navy mb-2 truncate">{product.name}</h3>
                <p className="text-lg font-bold text-gold mb-4">Rs. {product.price?.toLocaleString()}</p>
                
                <a 
                  href={`https://wa.me/923337269499?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} priced at PKR ${product.price}.\nProduct Image: ${product.image ? urlFor(product.image).url() : 'N/A'}\nIs it available?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-colors
                    ${product.inStock 
                      ? 'bg-navy text-white hover:bg-navy-light' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300'}`}
                  onClick={(e) => !product.inStock && e.preventDefault()}
                >
                  <FaWhatsapp className="text-xl" />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
