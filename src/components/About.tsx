import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { LoadingSpinner } from '../App';

export const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const Spline = React.lazy(() => import('@splinetool/react-spline'));

    return (
        <div id="about" className="min-h-screen bg-zinc-950">
            <div className="grid grid-cols-1 lg:grid-cols-6 min-h-screen">
                {/* 3D Model Section */}
                <div className="hidden lg:block lg:col-span-2 relative">
                    <div className="sticky top-0 h-screen">
                        <Suspense fallback={<LoadingSpinner />}>
                            <Spline
                                scene="https://prod.spline.design/fhJnFIerVuKOFqHz/scene.splinecode"
                                onError={(e) => console.error(e)}
                                className="w-full h-full object-contain"
                            />
                        </Suspense>
                    </div>
                </div>
                <div
                    ref={ref}
                    className={`col-span-1 lg:col-span-4 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16
                        transition-all duration-1000 ease-linear
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-center mb-8 sm:mb-12">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                    <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
                        <div className="text-base sm:text-lg lg:text-xl text-slate-300 font-poppins leading-relaxed">
                            <p className="mb-4">
                                I'm A Full Stack Development Engineer, I specialize in architecting and deploying enterprise-grade applications leveraging modern cloud-native technologies. My expertise encompasses comprehensive solutions across the development spectrum, from scalable microservices to sophisticated front-end architectures.

                            </p>
                            <p className="mb-4">
                                Here's a more concise version that maintains the professional tone while being more impactful:

                                "With deep expertise in the MERN ecosystem, I architect robust full-stack solutions using TypeScript and Hono for backend efficiency, while leveraging React's latest features including server components for dynamic frontend experiences.
                            </p>
                            <p className="mb-4">
                                My DevOps proficiency spans Docker, Kubernetes, and AWS services (EC2, S3, CloudFront), enabling the deployment of scalable, distributed systems with automated CI/CD pipelines. Experienced in both SQL and NoSQL architectures, I implement optimized data models that prioritize performance and scalability.

                                Driven by technical excellence, I deliver sophisticated, maintainable solutions that align with modern engineering practices while creating measurable business impact."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};