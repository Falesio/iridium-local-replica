import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

// EmailJS Configuration - You need to set these up at https://www.emailjs.com/
// 1. Create a free account at emailjs.com
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{phone}}, {{message}}
// 4. Replace these values with your own:
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // e.g., "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g., "template_xyz789"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g., "AbCdEfGhIjK"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "riccardonenci@yahoo.it",
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="rounded-2xl p-6 md:p-8 shadow-2xl bg-[#14181f]/[0.78]">
      <h3 className="text-xl font-bold mb-6 text-primary">Get a Free Quote</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 rounded-lg bg-green-500/20 text-green-400 text-sm">
          Thank you! Your message has been sent. We'll be in touch shortly.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/20 text-red-400 text-sm">
          Failed to send message. Please try again or call us directly.
        </div>
      )}
      
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;