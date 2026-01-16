import { Zap, Lightbulb, AlertTriangle, Wifi, Fan, Power, Network, Home } from "lucide-react";

const PopularServices = () => {
  const services = [
    {
      icon: Zap,
      title: "Switchboard Upgrades & Safety Switches",
      description: "Upgrade old or unsafe switchboards for better protection and compliance.",
    },
    {
      icon: AlertTriangle,
      title: "Fault Finding & Electrical Repairs",
      description: "Quick diagnosis and repairs to restore safety and functionality.",
    },
    {
      icon: Lightbulb,
      title: "LED Lighting Installation",
      description: "Modern, energy-efficient lighting solutions for indoors and outdoors.",
    },
    {
      icon: Zap,
      title: "Emergency & Urgent Electrical Work",
      description: "Need help fast? We respond promptly to urgent electrical issues.",
    },
    {
      icon: Wifi,
      title: "Data Cabling & NBN Setup",
      description: "Stay connected with professional data cabling and NBN-ready solutions for your home or business.",
    },
    {
      icon: Fan,
      title: "Ceiling & Exhaust Fan Installation",
      description: "Stay cool and ventilated with expert fan installations done right.",
    },
    {
      icon: Power,
      title: "Outdoor Power to Sheds & Workshops",
      description: "Power up your outdoor areas safely with weatherproof installations.",
    },
    {
      icon: Network,
      title: "Power Point & Internet Port Installation",
      description: "Add extra outlets or get connected with neat, reliable installations.",
    },
    {
      icon: Home,
      title: "Real Estate & Property Maintenance",
      description: "Reliable electrical maintenance for real estates and rental properties — done on time, every time.",
    },
  ];

  return (
    <section className="section-light section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center mb-6">
          Our Most Requested Services
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-3xl mx-auto">
          We specialise in fast, professional electrical work for homes and businesses across Gippsland. Our core services include:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
