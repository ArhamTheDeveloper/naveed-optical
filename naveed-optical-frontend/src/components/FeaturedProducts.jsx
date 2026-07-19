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

  if (!loading && products.length === 0) return null; // Don't show if no featured products

  return (
    <section className="py-16 md:py-20 bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Collection</h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="bg-ink rounded-2xl overflow-hidden shadow-sm border border-white/10 animate-pulse">
                <div className="h-40 sm:h-64 bg-white/5"></div>
                <div className="p-4 sm:p-6 space-y-3">
                  <div className="h-3 w-1/3 bg-white/5 rounded"></div>
                  <div className="h-5 w-2/3 bg-white/5 rounded"></div>
                  <div className="h-4 w-1/2 bg-white/5 rounded"></div>
                  <div className="h-11 w-full bg-white/5 rounded-xl mt-4"></div>
                </div>
              </div>
            ))
          ) : products.map((product) => (
            <div key={product._id} className="bg-ink rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/30 transition-shadow duration-300 border border-white/10 group flex flex-col">
              <div className="relative h-40 sm:h-64 overflow-hidden bg-white/5">
                {product.image ? (
                  <img 
                    src={urlFor(product.image).width(400).url()} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">No Image</div>
                )}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gold text-navy-dark text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1 rounded-full shadow-md">
                  Featured
                </div>
                {!product.inStock && (
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1 rounded-full shadow-md">
                    Out of Stock
                  </div>
                )}
              </div>
              
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="text-base sm:text-xl font-bold text-white mb-2 truncate">{product.name}</h3>
                <p className="text-base sm:text-lg font-bold text-gold mb-4 mt-auto">Rs. {product.price?.toLocaleString()}</p>
                
                <a 
                  href={`https://wa.me/923337269499?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} priced at PKR ${product.price}.\nProduct Image: ${product.image ? urlFor(product.image).url() : 'N/A'}\nIs it available?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-colors
                    ${product.inStock 
                      ? 'bg-navy-light text-white hover:bg-navy' 
                      : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/10'}`}
                  onClick={(e) => !product.inStock && e.preventDefault()}
                >
                  <FaWhatsapp className="text-lg sm:text-xl" />
                  <span className="hidden sm:inline">Order via WhatsApp</span>
                  <span className="sm:hidden">Order</span>
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
