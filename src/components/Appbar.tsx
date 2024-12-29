import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { Menu, X, Linkedin } from "lucide-react";
import { XIcon } from './XIcon';

export const Appbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { to: "home", label: "Home", offset: -150 },
        { to: "about", label: "About", offset: -50 },
        { to: "projects", label: "Projects", offset: -50 },
        { to: "services", label: "Services", offset: -50 },
        { to: "contact", label: "Contact", offset: -50 }
    ];

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/kshitiz-prakash-srivastava-a9b797256/",
            icon: Linkedin,
            label: "LinkedIn"
        },
        {
            href: "https://x.com/KshitizSri07",
            icon: XIcon,
            label: "X (Twitter)"
        }
    ];

    return (
        <header className={`fixed w-full cursor-pointer z-50 transition-all duration-300 ${
            scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-zinc-950'
        } border-b border-zinc-800/50`}>
            <nav className="mx-auto w-[92%] max-w-[1200px] py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Social Links */}
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-cyan-400 transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/file/d/your-resume-id/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1.5 bg-cyan-500 text-white text-sm rounded-full hover:bg-cyan-600 transition-colors duration-300"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Navigation Menu */}
                    <ul className="hidden md:flex items-center justify-center gap-8">
                        {menuItems.map((item) => (
                            <li key={item.to} className="relative group">
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={500}
                                    className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm uppercase tracking-wider"
                                >
                                    {item.label}
                                </Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex justify-end">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors duration-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors duration-200"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <ul className="flex flex-col items-center justify-center gap-8 h-[80vh]">
                        {menuItems.map((item) => (
                            <li key={item.to} className="relative group">
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:text-cyan-400 transition-colors duration-300 text-xl uppercase tracking-wider"
                                >
                                    {item.label}
                                </Link>
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                            </li>
                        ))}
                        {/* Mobile Social Links */}
                        <div className="flex items-center gap-6 mt-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                            <a
                                href="https://drive.google.com/file/d/your-resume-id/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1.5 bg-cyan-500 text-white text-sm rounded-full hover:bg-cyan-600 transition-colors duration-300"
                            >
                                Resume
                            </a>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Appbar;