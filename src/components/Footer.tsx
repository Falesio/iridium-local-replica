import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="section-dark section-padding border-t border-white/10">
      <div className="container-custom">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The smartest solutions, for the best possible outcomes.
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto mb-8">
            At Dorky, we take pride in enhancing your residential and commercial spaces with exceptional electrical services. Contact us today to experience the Dorky difference. We're here to make your electrical journey truly remarkable.
          </p>
          <a href="tel:1800036759" className="btn-primary text-lg">
            <Phone className="w-5 h-5 mr-2" />
            Call Now: 1800 036 759
          </a>
        </div>

        {/* Footer Info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-primary">DORKY</span>
            </div>
            <p className="text-white/60 text-sm">
              Your trusted local electricians serving Gippsland with fast, reliable, and professional electrical services.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:1800036759" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  1800 036 759
                </a>
              </li>
              <li>
                <a href="mailto:info@dorky.com.au" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  info@dorky.com.au
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-4">Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Clock className="w-4 h-4" />
                Open 24 Hours
              </li>
              <li className="text-white/70 text-sm">
                Emergency callouts available
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-bold mb-4">Service Area</h4>
            <div className="flex items-start gap-2 text-white/70">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>Serving all of Gippsland including Traralgon, Morwell, Sale, and surrounding areas</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Dorky Electricians. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
