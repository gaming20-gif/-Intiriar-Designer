

import React from "react";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Loft",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    description: "Clean lines and open spaces",
    details: "2,500 sq ft • 3 months • New York",
    year: "2024",
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Sophisticated elegance",
    details: "4,200 sq ft • 5 months • Manhattan",
    year: "2024",
  },
  {
    id: 3,
    title: "Contemporary Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Productive environments",
    details: "8,000 sq ft • 6 months • Brooklyn",
    year: "2023",
  },
  {
    id: 4,
    title: "Cozy Cafe Interior",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    description: "Warm and inviting spaces",
    details: "1,800 sq ft • 3 months • Queens",
    year: "2023",
  },
  {
    id: 5,
    title: "Scandinavian Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    description: "Nordic simplicity",
    details: "3,000 sq ft • 4 months • Hamptons",
    year: "2024",
  },
  {
    id: 6,
    title: "Boutique Hotel Suite",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    description: "Luxurious comfort",
    details: "5,500 sq ft • 7 months • Miami",
    year: "2023",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Explore our collection of stunning transformations across residential, commercial, and hospitality spaces
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              >
                {/* Project Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-neutral-500">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 mb-3">{project.description}</p>
                  <p className="text-sm text-neutral-500">{project.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
