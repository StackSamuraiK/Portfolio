import { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Code } from 'lucide-react';
import paytm2 from "../images/paytm2.png"
import blog2 from "../images/blog2.png"
import blitz from "../images/blitz.png"
import otw from "../images/otw.png"

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Blitz AI Website builder",
      image: blitz,
      description: "A full-stack AI Website BUilder build with GeminiAPI and uses Web-Containers to display websites.",
      techStack: ["React", "Node.js", "Typescript", "Express", "Tailwind CSS" , "Gemini API"],
      features: [
        "Visual Page Builder",
        "AI Powered Content Generation",
        "Customer Code Integration",
        "API Integration Capabilities"
      ],
      links: {
        github: "https://github.com/StackSamuraiK/blitz.new",
        live: "https://blitz-new.vercel.app/" 
      }
    },
    {
      id: 2,
      title: "Bloging Webiste",
      image: blog2,
      description: "A platform for creating, sharing, and discovering written content with user-friendly publishing tools.",
      techStack: ["React.js", "TypeScript", "Prisma", "Hono" , "Clodflare" ,  "PostgreSQL"],
      features: [
        "Article Reading Time Estimator",
        "Smart Article Search & Filtering",
        "Maintains search history",
        "Social Engagement Features"
      ],
      links: {
        github: "https://github.com/StackSamuraiK/blog-medium",
        live: "https://blog-medium-omega.vercel.app/signup"
      }
    },
    {
      id: 3,
      title: "Payment Application",
      image: paytm2,
      description: " A secure app for seamless financial transactions, bill payments, and money transfers..",
      techStack: ["React.js", "MongoDB", "TailwindCSS", "Node.js", "Express.js"],
      features: [
        "Digital Wallet & Payment Processing",
        "Automatic bill fetch",
        "QR Code Payments",
        "Bill payment reminders"
      ],
      links: {
        github: "https://github.com/StackSamuraiK/Paytm",
        live: "https://paytm-chi-six.vercel.app/"
      }
    },
    {
      id: 4,
      title: "EdGuru- Educational Platform (under development)",
      image: otw,
      description: " An interactive learning hub offering courses, resources, and tools for students and educators.",
      techStack: ["React.js", "Postgres", "TailwindCSS", "Node.js", "Express.js" , "Prisma"],
      features: [
        "Learning Management System (LMS)",
        "Interactive Learning Tools",
        "Assessment System",
        "Student Engagement Features"
      ],
      links: {
        github: "https://github.com/yourusername/project3",
        live: "https://project3-demo.com"
      }
    },
    {
      id: 5,
      title: "Testimoney- Testimonial creation Webapp (under development)",
      image: otw,
      description: "A tool for businesses to collect, design, and showcase client reviews effectively.",
      techStack: ["React.js", "Postgres", "TailwindCSS", "Node.js", "Express.js" , "Prisma" ],
      features: [
        "Testimonial Collection",
        "Testimonial Display",
        "Management Dashboard",
        "Integration Features"
      ],
      links: {
        github: "https://github.com/yourusername/project3",
        live: "https://project3-demo.com"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div id="projects" className="min-h-screen py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 text-zinc-100">My Projects</h2>
        
        <div className="relative shadow-2xl shadow-zinc-600 w-full max-w-4xl mx-auto">
          <div className="relative overflow-hidden w-full min-h-[600px] bg-zinc-900 rounded-lg shadow-xl shadow-zinc-900/50 border border-zinc-800">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col h-full p-6 bg-gradient-to-b from-zinc-900 to-zinc-900/95">
                    <div className="flex flex-col gap-6">
                      <div className="relative group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg border border-zinc-800"
                        />
                        <div className="absolute inset-0 bg-zinc-950 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center gap-4">
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                             className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                            <Github className="w-6 h-6 text-zinc-100" />
                          </a>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                             className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                            <ExternalLink className="w-6 h-6 text-zinc-100" />
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-3 text-zinc-100">{project.title}</h2>
                        <p className="text-zinc-400 mb-4">{project.description}</p>

                        <div className="mb-4">
                          <h3 className="font-semibold mb-2 flex items-center gap-2 text-zinc-200">
                            <Code className="w-5 h-5" />
                            Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm border border-zinc-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="font-semibold mb-2 text-zinc-200">Key Features</h3>
                          <ul className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="text-zinc-400 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-16 flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full shadow-lg shadow-zinc-900/50 text-zinc-100 hover:bg-zinc-700 focus:outline-none border border-zinc-700"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-16 flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full shadow-lg shadow-zinc-900/50 text-zinc-100 hover:bg-zinc-700 focus:outline-none border border-zinc-700"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="inline-flex justify-center px-4 py-2 absolute -bottom-12 left-1/2 -translate-x-1/2 bg-zinc-800 rounded-lg shadow-lg shadow-zinc-900/50 text-zinc-100 border border-zinc-700">
            <span>{currentSlide + 1}</span>
            <span className="mx-1">/</span>
            <span>{projects.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;