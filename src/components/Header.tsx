import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    href: "#services",
    label: "Services"
  }, {
    href: "#how-it-works",
    label: "How It Works"
  }, {
    href: "#why-us",
    label: "Why Choose Us"
  }, {
    href: "#areas",
    label: "Areas"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-section-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="container-custom section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-black text-primary">DORKY</span>
            <span className="text-sm font-medium text-white/80 hidden sm:block">ELECTRICIAN</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-white/80 hover:text-primary transition-colors font-medium">
                {link.label}
              </a>)}
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-4">
            <a href="tel:1800036759" className="hidden sm:flex items-center gap-2 text-white font-bold text-lg hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              1800 036 759
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-white hover:text-primary transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-primary transition-colors font-medium py-2">
                  {link.label}
                </a>)}
              <a href="tel:1800036759" className="sm:hidden flex items-center gap-2 text-white font-bold text-lg py-2">
                <Phone className="w-5 h-5 text-primary" />
                1800 036 759
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;