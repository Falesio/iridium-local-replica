import { Award, ShieldCheck, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Lifetime Workmanship Warranty",
      description: "We stand by the quality of our work. That's why every job we complete is backed by a lifetime warranty on workmanship – no shortcuts, no worries.",
    },
    {
      icon: ShieldCheck,
      title: "Free Safety Inspection with Every Job",
      description: "Your safety is our priority. Every service includes a complimentary electrical safety check to help prevent future hazards and keep your property compliant.",
    },
    {
      icon: Users,
      title: "Local, Friendly & Fully Qualified",
      description: "Our team is made up of approachable, fully licensed electricians who know the area and understand what local homes and businesses need. Professional, punctual, and always respectful of your space.",
    },
  ];

  return (
    <section id="why-us" className="section-dark section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white text-center mb-16">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-white/70 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
