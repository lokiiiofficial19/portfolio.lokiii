import { getImgPath } from "@/utils/image";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Hi, I'm Lokesh 
                </h1>

                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-3">
                Software Developer (Java)
              </h2>
            </div>

            <p className="text-secondary font-normal max-w-md xl:max-w-xl leading-relaxed">
              Motivated software developer fresher with strong foundation in Java, Data Structures, and problem-solving.
              I’m a passionate Frontend Developer specializing in building modern,
              responsive, and user-friendly web applications using React, Next.js,
              and JavaScript. I love creating clean UI and smooth user experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-4">
            

              <a
  href="/images/home/about-me/lokesh java Professional CV Resume.pdf"
  download
  className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
>
  <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
    Download Resume
  </span>
</a>
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <Image
            src={getImgPath("/images/home/banner/1751685014032.jpg")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>

      {/* DESKTOP IMAGE */}
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block">
        <Image
          src={getImgPath("/images/home/banner/1751685014032.jpg")}
          alt="banner-img"
          width={685}
          height={650}
          className="absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default Hero;