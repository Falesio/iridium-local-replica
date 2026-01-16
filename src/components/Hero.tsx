import { CheckCircle, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ContactForm from "./ContactForm";

const Hero = () => {
  const features = [
    "Available 24/7 across Gippsland",
    "Free Electrical Safety Check with Every Job",
    "No surprise costs — clear job quotes upfront",
  ];

  return (
    <section className="hero-section pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <p className="text-primary font-semibold text-lg mb-4">Dorky Electricians</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Fast, Reliable Electricians — Gippsland Wide
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              Fully qualified residential & commercial electricians delivering rapid service and peace of mind.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Google Reviews Badge */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 inline-flex">
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">G</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm">5.0 rating · 242 reviews</p>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="animate-slide-in-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
