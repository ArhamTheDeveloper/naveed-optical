import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-navy text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="h-1 w-20 bg-gold rounded mb-6"></div>
              <p className="text-gray-300 text-lg">
                Visit our store to check out our collection or contact us directly via WhatsApp for quick orders and inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-navy-light p-3 rounded-full text-gold mt-1">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Our Store</h4>
                  <p className="text-gray-300">Shop #4, Main Market, Optics Plaza<br/>Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-navy-light p-3 rounded-full text-gold mt-1">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Phone</h4>
                  <p className="text-gray-300">+92 333 7269499</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-navy-light p-3 rounded-full text-gold mt-1">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Working Hours</h4>
                  <p className="text-gray-300">Mon - Sat: 10:00 AM - 10:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/923337269499" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg"
            >
              <FaWhatsapp className="text-3xl" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-navy-light rounded-3xl p-4 shadow-2xl border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.332409434557!2d68.6304603744009!3d27.953104314611334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39343b0805969ef5%3A0x844bad0143f5519f!2sNaveed%20Optical%20Center%20Shikarpur!5e0!3m2!1sen!2s!4v1773771701546!5m2!1sen!2s" 
              className="w-full h-full min-h-[400px] rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Naveed Optical Center Shikarpur Location"
            ></iframe>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Naveed Optical. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
