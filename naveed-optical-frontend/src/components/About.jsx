import { FaEye, FaAward, FaSmile } from 'react-icons/fa';

const About = () => {
  const stats = [
    {
      icon: <FaAward className="text-4xl text-gold mb-4 mx-auto" />,
      title: "20+ Years",
      desc: "Of Experience"
    },
    {
      icon: <FaEye className="text-4xl text-gold mb-4 mx-auto" />,
      title: "50+ Brands",
      desc: "Available In-store"
    },
    {
      icon: <FaSmile className="text-4xl text-gold mb-4 mx-auto" />,
      title: "10k+",
      desc: "Happy Customers"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm mb-2">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Quality Eyecare with a Legacy of Trust
            </h2>
            <div className="h-1 w-20 bg-gold rounded"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Naveed Optical, we have been providing top-tier optical services and premium eyewear for over two decades. Our mission is to combine the latest in vision technology with timeless style to ensure you see the world clearly and look your best doing it.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you need prescription glasses, designer sunglasses, or comfortable contact lenses, our expert staff is here to help you find the perfect fit.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-gold/30 group">
                <div className="transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="font-bold text-2xl text-navy mb-1">{stat.title}</h3>
                <p className="text-gray-500 font-medium">{stat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
