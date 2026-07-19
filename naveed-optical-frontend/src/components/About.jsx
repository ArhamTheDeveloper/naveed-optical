import { FaAward, FaGlasses, FaEye } from 'react-icons/fa';

const About = () => {
  const stats = [
    {
      icon: <FaAward className="text-4xl text-gold mb-4 mx-auto" />,
      title: "20+ Years",
      desc: "Serving Shikarpur"
    },
    {
      icon: <FaGlasses className="text-4xl text-gold mb-4 mx-auto" />,
      title: "Rs. 500 - 3,000",
      desc: "Frames, Every Budget"
    },
    {
      icon: <FaEye className="text-4xl text-gold mb-4 mx-auto" />,
      title: "Rs. 600 - 1,500+",
      desc: "Lenses, By Quality"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-ink relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm mb-2">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A Name Shikarpur Has Trusted for Over 20 Years
            </h2>
            <div className="h-1 w-20 bg-gold rounded mx-auto lg:mx-0"></div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Naveed Optical has been open for more than two decades, making it one of the oldest and most established optical stores in the city. Generations of families have come through our doors for eyewear that fits right and lasts.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We keep a wide range on our shelves — everyday frames starting around PKR 500 up to premium options near PKR 3,000, and lenses from PKR 600 up to PKR 1,500 and beyond depending on the quality you need. Whatever your budget, our staff will help you find the right fit, no upselling.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-surface p-6 sm:p-8 rounded-2xl text-center shadow-sm border border-white/10 hover:border-gold/30 transition-colors group">
                <div className="transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="font-bold text-xl sm:text-2xl text-white mb-1">{stat.title}</h3>
                <p className="text-gray-400 font-medium text-sm sm:text-base">{stat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
