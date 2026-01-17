
const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We start with understanding your vision, needs, and budget.",
  },
  {
    number: "02",
    title: "Concept Development",
    desc: "Our team creates mood boards and preliminary designs.",
  },
  {
    number: "03",
    title: "3D Rendering",
    desc: "See your space come to life with photorealistic visualizations.",
  },
  {
    number: "04",
    title: "Implementation",
    desc: "We coordinate with contractors and manage the build process.",
  },
];

const ProcessPage = () => (
  <>
    {/* Hero Section */}
    <section className="pt-32 pb-20 bg-gradient-to-br from-amber-600 to-orange-500 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h1>
        <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto">
          A proven approach to bringing your vision to life
        </p>
      </div>
    </section>

    {/* Process Steps */}
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-600 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProcessPage;
