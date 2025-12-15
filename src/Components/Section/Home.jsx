import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className=" text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent leading-right">
            Hi,I'm Gowtham
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer passionate about crafting scalable and
            high-quality web applications. I enjoy turning ideas into
            functional, user-friendly products that create real value. With a
            strong drive to grow and collaborate, I aim to contribute to
            projects that make a lasting impact.
          </p>
          <div className="flex justify-center mx-auto">
            <div className="flex flex-col w-[90%] gap-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="/Gowtham P edit.pdf" download
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
