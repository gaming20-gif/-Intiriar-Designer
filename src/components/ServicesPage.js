
import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  { 
    title: "Space Planning", 
    desc: "Optimize your layout for maximum functionality and flow"
  },
  { 
    title: "Interior Styling", 
    desc: "Curated aesthetics that reflect your personality"
  },
  { 
    title: "3D Visualization", 
    desc: "See your space before construction begins"
  },
  { 
    title: "Custom Furniture", 
    desc: "Bespoke pieces designed specifically for your space"
  },
  { 
    title: "Lighting Design", 
    desc: "Create ambiance with strategic lighting solutions"
  },
  { 
    title: "Color Consultation", 
    desc: "Perfect palette selection for every room"
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-amber-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Comprehensive design solutions tailored to bring your vision to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>

                {/* Title + Desc */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.desc}</p>

                {/* CTA */}
                <button className="text-amber-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
