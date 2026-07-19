import { useState, useEffect } from 'react';
import { client, urlFor } from '../lib/sanityClient';
import { FaWhatsapp, FaSearch } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchError, setFetchError] = useState(false);

  const filters = ['All', 'Frames', 'Sunglasses', 'Reading Glasses', 'Contact Lenses'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc) {
          _id,
          name,
          category,
          price,
          image,
          inStock
        }`;
        const data = await client.fetch(query);
        setProducts(data);
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category, query) => {
    let filtered = allProducts;
    if (category !== 'All') {
      filtered = filtered.filter(p => p.category === category);
    }
    if (query.trim() !== '') {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(lowerQuery));
    }
    setProducts(filtered);
  };

  const handleFilter = (category) => {
    setActiveFilter(category);
    filterProducts(category, searchQuery);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterProducts(activeFilter, query);
  };

  return (
    <section id="products" className="py-20 md:py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Collection</h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Explore our wide range of premium eyewear carefully curated to provide you with the best in style and clarity.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6 md:mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            aria-label="Search products by name"
            className="w-full pl-12 pr-4 py-3 rounded-full bg-surface border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold shadow-sm transition-all duration-300"
            placeholder="Search products by name..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 shadow-sm
                ${activeFilter === filter 
                  ? 'bg-gold text-navy-dark shadow-md' 
                  : 'bg-surface text-gray-300 border border-white/10 hover:bg-surface-2'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : fetchError ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 font-medium">Couldn't load products right now.</p>
            <p className="text-gray-500 mt-2">Please refresh, or reach us on WhatsApp and we'll help directly.</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-x-8 sm:gap-y-12">
            {products.map((product) => (
              <div key={product._id} className="bg-surface rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/30 transition-all duration-300 border border-white/10 group flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative h-36 sm:h-72 overflow-hidden bg-ink p-3 sm:p-6 flex items-center justify-center">
                  {product.image ? (
                    <img 
                      src={urlFor(product.image).width(500).url()} 
                      alt={product.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 z-10"
                    />
                  ) : (
                    <div className="text-gray-600 flex flex-col items-center gap-2">
                       <FaSearch className="text-2xl sm:text-4xl" />
                       <span className="text-xs sm:text-sm">No Image</span>
                    </div>
                  )}
                  
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
                    <span className="bg-white text-navy-dark text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {!product.inStock && (
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md">
                      Sold Out
                    </div>
                  )}
                </div>
                
                {/* Content Container */}
                <div className="p-3 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-1 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-base sm:text-xl font-black text-gold tracking-tight mb-3 sm:mb-6 mt-auto">Rs. {product.price?.toLocaleString()}</p>
                  
                  <a 
                    href={`https://wa.me/923337269499?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} priced at PKR ${product.price}.\nProduct Image: ${product.image ? urlFor(product.image).url() : 'N/A'}\nIs it available?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base transition-all duration-300 shadow-md
                      ${product.inStock 
                        ? 'bg-gold hover:bg-gold-dark text-navy-dark hover:shadow-lg hover:-translate-y-0.5' 
                        : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/10'}`}
                    onClick={(e) => !product.inStock && e.preventDefault()}
                  >
                    <FaWhatsapp className="text-base sm:text-xl" />
                    <span className="truncate">{product.inStock ? 'Order on WhatsApp' : 'Unavailable'}</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 font-medium">No products found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;
