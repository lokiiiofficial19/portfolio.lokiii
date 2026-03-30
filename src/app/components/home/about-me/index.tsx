import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">

        {/* BACKGROUND IMAGE */}
        <div className="absolute top-0 w-full px-9">
          <Image
            src="/images/home/about-me/resume-bg-img.svg"
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">

            {/* TITLE */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">

              {/* IMAGE */}
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full lg:max-w-2xl flex-1">

                {/* REAL DESCRIPTION */}
                <p className="leading-relaxed text-base md:text-lg">
                  I am a passionate Frontend Developer from Chennai, India,
                  currently focusing on building modern, responsive, and
                  user-friendly web applications. I have strong knowledge in
                  HTML, CSS, JavaScript, React, and Next.js.
                  <br /><br />
                  I enjoy turning ideas into real-world projects and continuously
                  improving my skills to become a professional software developer.
                  I am actively looking for internship or entry-level opportunities
                  to start my career in the IT industry.
                </p>

                {/* STATS (REALISTIC) */}
                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">

                  <div>
                    <h3>05+</h3>
                    <p className="text-base md:text-lg text-black">
                      Projects Built
                    </p>
                  </div>

                  <div>
                    <h3>10+</h3>
                    <p className="text-base md:text-lg text-black">
                      Technologies Learned
                    </p>
                  </div>

                  <div>
                    <h3>100%</h3>
                    <p className="text-base md:text-lg text-black">
                      Passion to Learn
                    </p>
                  </div>

                </div>

                {/* LANGUAGES */}
                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">

                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Languages</p>
                  </div>

                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Tamil"].map((lang) => (
                      <p
                        key={lang}
                        className="bg-white py-2 md:py-3 px-4 rounded-full text-base xl:text-lg"
                      >
                        {lang}
                      </p>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;