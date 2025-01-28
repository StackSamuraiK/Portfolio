import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
    >
      <div className="p-3 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

export default SocialLink;