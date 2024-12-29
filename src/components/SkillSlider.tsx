import { useEffect, useState } from 'react';
//@ts-ignore
import { cn } from '@/lib/utils';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Express',
  'Docker',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Prisma',
  'AWS',
  'Git',
  'Github',
  'Tailwind CSS',
  'Recoil',
  'Postman',
  'HTML5',
  'Websocket',
  'Kubernetes',
  'Grafana',
  'Nginx',
  'Redis',
  'CSS3',
  'Webpack',
  'Jest',
  'CI/CD',
];

export function SkillsSlider() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-zinc-950 font-['Poppins'] overflow-hidden py-8">
      <div className="relative flex items-center">
        <div
          className="flex gap-8 transition-transform duration-1000"
          style={{
            transform: `translateX(-${position * 150}px)`,
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className={cn(
                "min-w-[120px] px-6 py-3 rounded-full",
                "bg-gradient-to-r from-blue-600/20 to-blue-500/20",
                "border border-blue-500/30",
                "text-white text-sm font-medium",
                "flex items-center justify-center",
                "shadow-lg shadow-black/20",
                "transition-all duration-300 hover:scale-110 hover:border-blue-400"
              )}
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent" />
      </div>
    </div>
  );
}