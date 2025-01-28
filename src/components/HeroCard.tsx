import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import p2 from "../images/p2.jpg"

const Hero = () => {
  return (
    <section id='home' className="min-h-screen bg-zinc-950 flex items-center justify-center py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl ml-10 md:text-6xl font-bold text-white font-poppins">
            Hi, I'm <span className="text-indigo-500">Kshitiz Srivastav</span>
          </h1>
          <p className="text-xl ml-10 text-zinc-400 font-poppins">
            I'm a Full Stack Web Developer and DevOps Engineer passionate about building scalable applications and streamlining development operations through automated solutions.
          </p>
          <div className="flex ml-10 gap-4">
            <a href="https://github.com/StackSamuraiK" className="text-zinc-400 hover:text-indigo-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kshitiz-prakash-srivastava-a9b797256/" className="text-zinc-400 hover:text-indigo-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kshitizsrivastav3344@gmail.com" className="text-zinc-400 hover:text-indigo-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="relative">            
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-75"></div>
            <div className="w-[400px] h-[600px] overflow-hidden rounded-xl relative shadow-2xl">
              <img
                src={p2}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-500/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;