const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-5 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x-icon lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <div className="flex flex-col text-center">
        <a
          href="#home"
          onClick={()=> setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 -translate-y-5"}`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={()=> setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 -translate-y-5"}`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={()=> setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 -translate-y-5"}`}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={()=> setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 -translate-y-5"}`}
        >
          Contact
        </a>
        <a
          href="#resume"
          onClick={()=> setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 -translate-y-5"}`}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
