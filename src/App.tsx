import { Suspense } from 'react';
import React from 'react';
import { Home } from './components/Home';
import { Appbar } from './components/Appbar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import Footer from './components/Footer';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

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
        <div className="grid grid-cols-1 lg:grid-cols-6 min-h-screen">
          {/* Home Content */}
          <div className="col-span-1 lg:col-span-4 min-h-screen flex items-center">
            <Home />
          </div>

          {/* Spline Animation */}
          <div className="hidden lg:flex lg:col-span-2 min-h-screen items-center justify-center">
            <div className="w-full h-4/5 relative">
              <Suspense fallback={<LoadingSpinner />}>
                <Spline
                  scene="https://prod.spline.design/jFV4Er1mu0oEQQo7/scene.splinecode"
                  onError={(e) => console.error(e)}
                  className="w-full h-full object-contain"
                />
              </Suspense>
            </div>
          </div>
        </div>

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