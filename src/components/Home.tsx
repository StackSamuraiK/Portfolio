export const Home = () => {
    return (
        <div id="home" className="flex min-h-screen w-full">
            <div className="flex justify-between flex-col px-4 sm:px-6 md:px-10 pt-10 md:pt-20 max-w-7xl mx-auto w-full">
                <div className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200">
                    Hi,
                </div>
                
                <div className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 mt-2">
                    I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Kshitiz  Srivastava</span>
                </div>
                
                <div className="font-poppins text-xl sm:text-2xl font-bold text-slate-400 mt-4">
                    Full-Stack and Devops Engineer
                </div>
                
                <div className="text-slate-100 text-xl sm:text-2xl md:text-3xl font-poppins font-semibold leading-relaxed  md:mt-16 lg:mt-24">
                    "Crafting digital experiences at the intersection of code and infrastructure.
                    <span className="text-cyan-500"> Full-stack developer </span> with a passion for cloud-native solutions and scalable architectures.
                    <span className="text-cyan-500"> I build systems that scale</span>"
                </div>
            </div>
        </div>
    )
}