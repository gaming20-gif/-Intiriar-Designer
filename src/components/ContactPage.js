
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const ContactPage = () => (
  <>
    {/* Hero Section */}
    <section className="pt-32 pb-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          Ready to start your design journey? We would love to hear from you.
        </p>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-amber-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-amber-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-neutral-600">hello@luxeinteriors.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-neutral-600">
                    123 Design Street, New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center shadow-sm hover:bg-gradient-to-br hover:from-amber-600 hover:to-orange-500 hover:text-white transition-all"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-neutral-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Project Type</label>
                <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Hospitality</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-semibold hover:scale-[1.02] transition-transform"
              >
                Send Message
              </button>
            </form>
          </div> */}
          <div className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56361.51854513671!2d69.62772034302193!3d23.250734077448573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e209000b6f17%3A0x7077f358af0774a6!2sBhuj%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1759409340395!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
