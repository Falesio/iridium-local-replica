import { Phone, FileText, Calendar, Wrench, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Get in touch",
      description: "Call us or submit the form and our receptionist will take your details.",
    },
    {
      icon: FileText,
      title: "Onsite Quote",
      description: "One of our estimators will attend and give a clear, upfront quote.",
    },
    {
      icon: Calendar,
      title: "Book It In",
      description: "We aim to schedule the job within a few days (or sooner for urgent work).",
    },
    {
      icon: Wrench,
      title: "Job Done Right",
      description: "Our licensed sparkies complete the work neatly and safely.",
    },
    {
      icon: Shield,
      title: "Safety Check",
      description: "Every job includes a free safety inspection of your home's electrical system.",
    },
  ];

  return (
    <section id="how-it-works" className="section-light section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center mb-16">
          How It Works
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="step-number mx-auto group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                {/* Connector Line (hidden on last item and on small screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-border -translate-y-1/2" />
                )}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
