import { Home, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Domestic",
      description: "Your local Gippsland residential electricians are friendly, clean, always arrive on time, get the job done and clean up after themselves.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Your electrical contract and projects team centrally located here in Gippsland. From testing & tagging all the way through to large commercial contracts.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="services" className="section-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Smoother. Smarter. Better.
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            We handle everything from home renovations to office, shop, and industrial electrical projects — all completed by licensed professionals with a focus on safety and efficiency.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
