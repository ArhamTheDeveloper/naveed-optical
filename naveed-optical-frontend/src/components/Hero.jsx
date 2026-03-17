import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative bg-navy text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4">
        <div className="w-96 h-96 bg-gold rounded-full opacity-10 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4">
        <div className="w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-navy-light border border-white/20 text-gold text-sm font-semibold tracking-wider uppercase mb-2">
              Premium Eyewear
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              See the World <br />
              <span className="text-gold">Clearly</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              Discover our exquisite collection of frames, sunglasses, and contact lenses. Style meets clarity at Naveed Optical.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#products" className="btn-primary flex items-center justify-center gap-2 group">
                Explore Collection
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-outline text-white hover:text-navy hover:bg-white border-white">
                Our Story
              </a>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/20 transform md:rotate-2 hover:rotate-0 transition-transform duration-500 group">
              {/* Using a placeholder for dummy image */}
              <img 
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Stylish person wearing glasses" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-navy p-4 rounded-xl shadow-xl border-b-4 border-gold animate-bounce">
              <p className="font-bold text-xl">20+ Years</p>
              <p className="text-sm font-medium text-gray-500">of Excellence</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
