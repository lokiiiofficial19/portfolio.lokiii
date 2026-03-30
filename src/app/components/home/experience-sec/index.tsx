import React from "react";

const ExperienceSec = () => {
  const experiences = [
  {
    year: "2024",
    title: "Frontend Development",
    company: "Self Learning",
    type: "Core Skills",
    description:
      "Learned HTML, CSS, and JavaScript fundamentals. Built responsive web pages and improved UI design skills. Later moved to React.js to build dynamic and component-based applications."
  },
  {
    year: "2025",
    title: "Java Development",
    company: "Academic + Self Learning",
    type: "Core Programming",
    description:
      "Focused on Java programming including OOP concepts, problem solving, and data structures basics. Practiced coding and improved logical thinking."
  },
  {
    year: "2025",
    title: "Full Stack Preparation",
    company: "Projects + Practice",
    type: "Career Focus",
    description:
      "Working on real-world projects using React and Next.js. Preparing for frontend developer roles and improving development skills."
  },
    {
      year: "2026",
      title: "Next.js Portfolio Development",
      company: "Self Project",
      type: "Live Project",
      description:
        "Built a modern portfolio website using Next.js with responsive design and deployment on Netlify."
    },
    {
      year: "2026",
      title: "Job Preparation",
      company: "Actively Seeking",
      type: "Full-time",
      description:
        "Preparing for software developer roles specializing in Java, focusing on object-oriented programming, data structures, and real-world application development."
    }
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">

          {/* TITLE */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>My Journey</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start"
              >
                {/* YEAR + TITLE */}
                <div>
                  <h3 className="font-bold text-black">{exp.year}</h3>
                  <h4 className="text-lg">{exp.title}</h4>
                </div>

                {/* COMPANY */}
                <div>
                  <span className="text-black font-medium">
                    {exp.company}
                  </span>
                  <p className="text-sm">{exp.type}</p>
                </div>

                {/* DESCRIPTION */}
                <div>
                  <p className="leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;