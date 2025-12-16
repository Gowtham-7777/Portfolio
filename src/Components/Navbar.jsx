import { useEffect } from "react";

const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(()=>{
    document.body.style.overflow = menuOpen ? "hidden" : "";
  },[menuOpen]);
  
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgb(10,10,10,10.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold">
            <span><span className="text-blue-700 text-2xl pt-1">&lt;</span>Gowtham<span className="text-blue-700 text-2xl pt-1 ">/&gt;</span></span>
          </a>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=> setMenuOpen((prev)=>!prev)}>
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
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a>
            <a href="https://drive.google.com/file/d/1IULLURenWyj7E9N3InIhkSGEAZtq8qFC/view?usp=drive_link" target="_blank" className="text-gray-300 hover:text-blue-500 transition-colors">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
