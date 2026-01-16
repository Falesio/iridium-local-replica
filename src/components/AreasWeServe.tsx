import { MapPin } from "lucide-react";

const AreasWeServe = () => {
  const areas = [
    "Warragul",
    "Drouin",
    "Moe",
    "Morwell",
    "Traralgon",
    "Churchill",
    "Sale",
    "Bairnsdale",
    "Yarram",
    "Foster",
    "Leongatha",
    "Maffra",
  ];

  return (
    <section id="areas" className="section-dark section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">Areas We Serve</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            We've got Gippsland Covered
          </h2>
          <p className="text-white/70 text-lg">
            Our teams are available in all of these areas and surrounding districts
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-white font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
