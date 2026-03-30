import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-2 items-center">
          
          {/* Line + Logo */}
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>

          {/* Your Name */}
          <p className="text-secondary text-sm text-center">
            © {new Date().getFullYear()} Lokiii. All rights reserved.
          </p>

          {/* Short Line */}
          <p className="text-xs text-gray-500 text-center">
            Built with Next.js & Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;