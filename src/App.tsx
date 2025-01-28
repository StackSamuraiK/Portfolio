import { Appbar } from './components/Appbar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/HeroCard';

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-screen bg-zinc-950">
    <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 border-b-2 border-white" />
  </div>
);

const App = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="fixed top-0 w-full z-50">
        <Appbar />
      </header>

      {/* Hero Section */}
      <main className="relative">
        <Hero/>
        {/* Main Content Sections */}
        <section className="space-y-8 md:space-y-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Services />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default App;