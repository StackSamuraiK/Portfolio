import { Code2, Database, Cloud, Cpu, Shield, Rocket } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { SkillsSlider } from './SkillSlider';

export function Services() {
    const services = [
        {
            title: "Frontend Architecture",
            description: "Creating immersive user experiences with React and modern web technologies. Focusing on performance, accessibility, and cutting-edge UI/UX.",
            Icon: Code2
        },
        {
            title: "Backend Systems",
            description: "Building scalable microservices and APIs using Node.js and Python. Implementing real-time features and efficient data processing.",
            Icon: Database
        },
        {
            title: "Cloud Infrastructure",
            description: "Designing and managing cloud-native architectures on AWS. Implementing serverless solutions and automated scaling systems.",
            Icon: Cloud
        },
        {
            title: "AI Integration",
            description: "Incorporating machine learning models and AI services to create intelligent applications that adapt and learn.",
            Icon: Cpu
        },
        {
            title: "Security First",
            description: "Implementing robust security measures and best practices to protect applications and data from modern threats.",
            Icon: Shield
        },
        {
            title: "DevOps Excellence",
            description: "Streamlining development workflows with CI/CD pipelines, container orchestration, and infrastructure as code.",
            Icon: Rocket
        }
    ];

    return (
        <section id="services" className="relative py-32 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Services & Expertise
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Comprehensive solutions for modern digital challenges
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="text-4xl font-bold mb-6 mt-6 pt-6 flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Skills
                </div>
            </div>
            <SkillsSlider />
        </section>
    );
}