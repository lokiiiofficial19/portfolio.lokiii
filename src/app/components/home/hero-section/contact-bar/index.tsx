"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const ContactBar = () => {
  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">

            {/* CONTACT INFO */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 lg:gap-10">

              {/* Email */}
              <a
                href="mailto:lokiiiofficial1337@gmail.com"
                className="flex items-center gap-2 lg:gap-3 text-sm md:text-base hover:text-primary"
              >
                <Image
                  src={getImgPath("/images/icon/mail-icon.svg")}
                  alt="email"
                  width={24}
                  height={24}
                />
                <span>lokiiiofficial1337@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:91+9962969975"
                className="flex items-center gap-2 lg:gap-3 text-sm md:text-base hover:text-primary"
              >
                <Image
                  src={getImgPath("/images/icon/call-icon.svg")}
                  alt="phone"
                  width={24}
                  height={24}
                />
                <span>+91 9962969975</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2 lg:gap-3 text-sm md:text-base">
                <Image
                  src={getImgPath("/images/icon/dribble-icon.svg")}
                  alt="location"
                  width={24}
                  height={24}
                />
                <span>Ranipet,Tamilnadu, India</span>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center justify-center md:justify-end gap-4">

              {/* GitHub */}
              <Link href="https://github.com/lokiiiofficial19" target="_blank">
                <Image
                  src={getImgPath("/images/icon/icons8-github.svg")}
                  alt="github"
                  width={30}
                  height={30}
                  className="hover:scale-110 transition"
                />
              </Link>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/in/lokiiiofficial1337" target="_blank">
                <Image
                  src={getImgPath("/images/icon/linkedin-icon.svg")}
                  alt="linkedin"
                  width={30}
                  height={30}
                  className="hover:scale-110 transition"
                />
              </Link>

              {/* Instagram (optional) */}
              <Link href="https://instagram.com/your-id" target="_blank">
                <Image
                  src={getImgPath("/images/icon/icons8-instagram.svg")}
                  alt="instagram"
                  width={30}
                  height={30}
                  className="hover:scale-110 transition"
                />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;