const teamMembers = [
  {
    name: "Alexandra Rivers",
    role: "Founder & Lead Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Marcus Chen",
    role: "Senior Interior Designer",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
  },
  {
    name: "Sophie Anderson",
    role: "Color & Materials Consultant",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

const AboutPage = () => (
  <>
    {/* Hero Section */}
    <section className="pt-32 pb-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
          Passionate designers creating exceptional spaces for over 15 years
        </p>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-20">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-neutral-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="aspect-square w-40 rounded-full overflow-hidden mb-6 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-amber-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
            Founded in 2010, Luxe Interiors has grown from a small studio to a
            full-service design firm recognized for excellence in creating
            spaces that inspire and delight. Our team combines artistic vision
            with technical expertise to deliver projects that exceed
            expectations.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            We believe that great design should be accessible to everyone, and
            we work closely with each client to understand their unique needs,
            budget, and vision. Whether it is a cozy apartment or a sprawling
            commercial space, we approach every project with the same dedication
            to quality and attention to detail.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
