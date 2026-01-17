
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Star, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    text: "Transformed our space beyond imagination. The attention to detail and creative vision was outstanding.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Business Owner",
    text: "Professional, creative, and delivered exactly what we envisioned for our office space.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Property Developer",
    text: "Exceptional design skills and project management. Highly recommend for any interior project.",
    rating: 5
  }
];

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Loft",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    description: "Clean lines and open spaces",
    details: "2,500 sq ft • 3 months • New York",
    year: "2024"
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Sophisticated elegance",
    details: "4,200 sq ft • 5 months • Manhattan",
    year: "2024"
  },
  {
    id: 3,
    title: "Contemporary Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Productive environments",
    details: "8,000 sq ft • 6 months • Brooklyn",
    year: "2023"
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Design Your{" "}
            <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Dream Space
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-200">
            Where creativity meets functionality in perfect harmony
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl"
            >
              Start Your Project
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              View Portfolio
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-600 to-orange-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-semibold mb-4">
              Meet the Founder
            </div>
            <h2 className="text-5xl font-bold mb-6">Alexandra Rivers</h2>
            <p className="text-xl text-neutral-600 mb-6">Founder & Lead Interior Designer</p>
            <p className="text-lg text-neutral-700 mb-4">
              With over 15 years of experience in transforming spaces into stunning works of art, I have dedicated my career to creating environments that inspire, comfort, and delight.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "500+", label: "Projects Completed" },
            { num: "15+", label: "Years Experience" },
            { num: "300+", label: "Happy Clients" },
            { num: "25+", label: "Awards Won" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl font-bold mb-2">{stat.num}</div>
              <div className="text-amber-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-neutral-600">A glimpse of our latest work</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-semibold text-amber-400 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Client Stories</h2>
          <p className="text-xl text-neutral-600">What our clients say about us</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl border border-neutral-200">
              <Quote className="text-amber-600 mb-4" size={40} />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={20} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-neutral-700 mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-neutral-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let us create something extraordinary together. Schedule your consultation today.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
