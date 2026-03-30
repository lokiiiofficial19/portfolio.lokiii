"use client";
import Image from "next/image";

const EducationSkills = () => {
  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">

          {/* VECTOR IMAGE */}
          <Image
            src="/images/home/education-skill/edu-skill-vector.svg"
            alt="vector"
            width={260}
            height={170}
            className="absolute top-0 left-0 transform -translate-y-1/2"
          />

          <div className="relative z-10 py-16 md:py-32">

            {/* TITLE */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20">

              {/* EDUCATION */}
              <div className="w-full lg:max-w-md flex flex-col gap-6">

                <div className="flex gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-black"></div>
                  <div>
                    <h5>BCA (Bachelor of Computer Applications)</h5>
                    <p>Ranippettai Arts & Science College (2023 - 2026)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-black"></div>
                  <div>
                    <h5>Higher Secondary (HSC)</h5>
                    <p>SRK BHEL – SIPCOT (2022 - 2023) | 61%</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-black"></div>
                  <div>
                    <h5>SSLC</h5>
                    <p>GHSVM – Walajapet (2020 - 2021)</p>
                  </div>
                </div>

              </div>

              {/* SKILLS */}
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">

                {[
                  { name: "Java", level: 5 },
                  { name: "OOP Concepts", level: 4 },
                  { name: "SQL", level: 3 },
                  { name: "HTML", level: 5 },
                  { name: "CSS", level: 5 },
                  { name: "JavaScript", level: 4 },
                  { name: "React", level: 3 },
                  { name: "DSA", level: 3 },
                  { name: "Git & GitHub", level: 4 }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 border border-softGray rounded-lg flex flex-col items-center gap-4"
                  >
                    <p className="font-medium">{skill.name}</p>

                    {/* RATING */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < skill.level ? "bg-orange-500" : "bg-gray-300"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;