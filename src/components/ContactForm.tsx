import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl">
      <h3 className="text-xl font-bold text-card-foreground mb-6">Get a Free Quote</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="textarea-field"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
