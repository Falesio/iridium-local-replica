import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularServices from "@/components/PopularServices";
import AreasWeServe from "@/components/AreasWeServe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <PopularServices />
      <AreasWeServe />
      <Footer />
    </div>
  );
};

export default Index;
