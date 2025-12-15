import RevealOnScroll from "../RevealOnScroll";
import pokedox from "../../assets/Pokedox.png";
import doctor from "../../assets/HealthCare.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src={doctor} alt="healthcare" className="rounded-xl w-full" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-6 ">
                Book a Doctor
              </h3>
              <p className="text-gray-400 mb-4">
                A full-stack healthcare web application that allows users to
                book doctor appointments, manage patient profiles, and access
                medical records through a responsive UI. It implements secure
                authentication using JWT, RESTful APIs for data management,
                role-based access control, and real-time scheduling. Built with
                React, Node.js, Express, and MongoDB, and deployed on Vercel for
                scalable performance and high availability.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://smarthealth-management-system.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={pokedox}
                alt="pokedox"
                className="rounded-xl w-full h-[200px]"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-6 ">
                Pokedox Lite
              </h3>
              <p className="text-gray-400 mb-4">
                A lightweight Pokédex web application that allows users to
                browse Pokémon using a responsive grid-based layout. It fetches
                real-time Pokémon data from a public API and displays detailed
                information with a clean, minimal UI. Built with React and
                deployed on Vercel for fast performance and accessibility.{" "}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://pokedoxlite.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Projects;
