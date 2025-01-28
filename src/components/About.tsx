import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Container, Terminal} from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Frontend Development', description: 'Creating responsive and intuitive user interfaces' },
    { icon: <Terminal className="w-6 h-6" />, title: 'Backend Development', description: 'Building robust and scalable server solutions' },
    { icon: <Container className="w-6 h-6" />, title: 'DevOps', description: 'Architecting resilient infrastructure and orchestrating seamless deployments' },
  ];

  return (
    <section ref={ref} id="about" className="py-20 bg-zinc-950 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
          <p className="text-zinc-400 leading-relaxed font-poppins">
          I turn ideas into reality by crafting powerful web applications and building rock-solid cloud infrastructure.
           Whether I'm writing clean code or automating complex deployments,
            I'm driven by the thrill of creating solutions that make a real difference. 
            My sweet spot is combining full-stack development expertise with DevOps mastery
             to build systems that not only work beautifully but scale effortlessly..
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800"
            >
              <div className="text-indigo-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 font-poppins">{skill.title}</h3>
              <p className="text-zinc-400 font-poppins">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;