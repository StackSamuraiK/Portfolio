import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export function ServiceCard({ title, description, Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl 
                    transition-all duration-500 group-hover:blur-2xl" />
      <div className="relative p-8 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm
                    transition-all duration-300 group-hover:-translate-y-2">
        <div className="mb-6">
          <Icon className="w-12 h-12 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}