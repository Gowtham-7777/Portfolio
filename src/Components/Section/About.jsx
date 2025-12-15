import RevealOnScroll from "../RevealOnScroll";
import cursorLogo from "../../assets/cursorLogo.jpeg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const skills = [
    { id: "1", name: "HTML", icon: "devicon-html5-plain colored" },
    { id: "2", name: "CSS", icon: "devicon-css3-plain colored" },
    {
      id: "3",
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-original colored",
    },
    { id: "4", name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { id: "5", name: "Python", icon: "devicon-python-plain colored" },
    { id: "6", name: "Java", icon: "devicon-java-plain colored" },
    { id: "7", name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { id: "8", name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { id: "9", name: "React.js", icon: "devicon-react-original colored" },
    { id: "10", name: "Next.js", icon: "devicon-nextjs-original" }, // (black/white, no colored version)
    { id: "11", name: "Vue.js", icon: "devicon-vuejs-plain colored" },
    { id: "12", name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { id: "13", name: "Express.js", icon: "devicon-express-original" }, // (express has no colored icon)
    { id: "14", name: "MySQL", icon: "devicon-mysql-plain colored" },
    { id: "15", name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  ];

  // const Frameworks = [
  //   "HTML",
  //   "CSS",
  //   "Tailwind CSS",
  //   "Bootstrap",
  //   "Python",
  //   "Java",
  //   "JavaScript",
  //   "TypeScript",
  //   "React.js",
  //   "Next.js",
  //   "Vue.js",
  //   "Node.js",
  //   "Express.js",
  //   "MySQL",
  //   "MongoDB",
  // ];

  // const DevTools = [
  //   {
  //     id: "1",
  //     name: "AWS",
  //     icon: "devicon-amazonwebservices-plain colored",
  //   },
  //   { id: "2", name: "Docker", icon: "devicon-docker-plain colored" },
  //   { id: "3", name: "Jenkins", icon: "devicon-jenkins-original" },
  //   { id: "4", name: "Postman", icon: "devicon-postman-plain colored" },
  //   { id: "5", name: "Jest", icon: "devicon-jest-plain colored" },
  //   { id: "6", name: "Git", icon: "devicon-git-plain colored" },
  //   { id: "7", name: "GitHub", icon: "devicon-github-original" }, // GitHub has no colored version
  //   { id: "8", name: "VS Code", icon: "devicon-vscode-plain colored" },
  //   { id: "9", name: "Cursor", icon: "devicon-codepen-plain colored" },
  // Cursor IDE doesn't exist in Devicon → placeholder
  //   { id: "10", name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  //   { id: "11", name: "Netlify", icon: "devicon-netlify-plain colored" },
  //   { id: "12", name: "Vercel", icon: "devicon-vercel-original" }, // no colored version
  // ];

  const DevTools = [
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      path: "devicon-github-original",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Cursor",
      icon: cursorLogo,
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "Jenkins",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-28"
    >
      <RevealOnScroll>
        <Fade cascade damping={0.5}>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent text-center ">
              About Me
            </h2>
            <div className="rounded-xl p-8 border-white/15 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-5 ">
                Passionate developer skilled in creating fast, reliable, and
                user-friendly web solutions. I focus on clean code, strong
                problem-solving, and continuous growth. some technologies I use
                in my development workflow:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 border-white/15 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-semibold mb-4">
                    Programming & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2 ">
                    {skills.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-blue-500/10 border border-blue-200 text-white py-1 px-3 rounded-full text-md hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition flex items-center gap-2"
                      >
                        <i className={`text-2xl ${tech.icon}`}></i>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-6 border-white/15 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-semibold mb-4">
                    Cloud & DevTools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {DevTools.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-blue-500/10 border border-blue-200 text-white py-1 px-3 rounded-full text-md hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition flex items-center gap-2"
                      >
                        {tech.icon ? (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6"
                          />
                        ) : (
                          <i className={tech.path + " text-[22px]"}></i>
                        )}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/15 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>
                    <strong>B.E. in Computer Science</strong>
                  </li>
                  <li className=" text-md">
                    MNM Jain Engineering College <br />
                    <span className="pl-6">2021-2025</span>
                  </li>
                  <li>
                    <strong>Relavant Coursework</strong> <br />{" "}
                    <span className="pl-6">
                      {" "}
                      Data Structures, Web Development, Object-Oriented
                      Programming, Computer Networking, Database Management
                      System.
                    </span>{" "}
                  </li>
                </ul>
              </div>
              <div className=" p-6 rounded-xl border-white/15 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                <ul className="space-y-3 font-bold">
                  <li className="text-gray-300">
                    Generative AI Intern at Edufic Digital July 2024 - Aug 2024
                  </li>
                  <li className="list-disc list-inside text-gray-400">
                    Developed and fine-tuned Generative AI models for text,
                    image, and code generation using Python Designed and
                    implemented prompt engineering techniques to optimize model
                    accuracy and creative output.
                  </li>
                  <li className="text-gray-300">
                    Full Stack Developer Intern at Revamp May 2025 - Sep 2025
                  </li>
                  <li className="list-disc list-inside text-gray-400">
                    Architected and optimized a responsive React.js frontend
                    with Tailwind CSS, delivering a 25% improvement in user
                    experience through intuitive UI/UX, and seamlessly
                    integrated 5+ RESTful APIs built with Node.js and
                    Express.js.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </RevealOnScroll>
    </section>
  );
};

export default About;
