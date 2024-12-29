import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import SocialLink from './SocialLink';
import XIcon from './XIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/StackSamuraiK"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kshitiz-prakash-srivastava-a9b797256/"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kshitizsrivastav3344@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+917054312258"
    },
    {
      icon: XIcon,
      label: "X",
      href: "https://x.com/KshitizSri07"
    }
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-2xl font-bold text-white">Connect With Me</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                //@ts-ignore
                icon={link.icon}
                label={link.label}
                href={link.href}
              />
            ))}
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-800 w-max-full text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Kshitiz Prakash Srivastava. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;