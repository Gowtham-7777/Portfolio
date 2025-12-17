import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_Service_ID, import.meta.env.VITE_Template_ID, e.target, import.meta.env.VITE_Public_Key)
      .then(() => {
        alert("Message Sent Successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Error Occurred, Please Try Again Later."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen md:px-20 lg:max-w-3xl mx-auto xl:max-w-4xl"
    >
      <RevealOnScroll>
        <div className="px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                value={formData.name}
                name="name"
                type="text"
                id="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                value={formData.email}
                name="email"
                type="email"
                id="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                value={formData.message}
                rows={10}
                name="message"
                id="message"
                placeholder="Write Your Valuable Scripts"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-white py-3 px-6 rounded font-medium bg-blue-500 transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
