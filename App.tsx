import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'motion/react';

// Context
import { ThemeProvider } from '@/contexts/ThemeContext';

// Components
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import CustomLoader from '@/components/CustomLoader';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import ProductGallery from '@/components/ProductGallery';
import ServiceCards from '@/components/ServiceCards';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import PartnerLogos from '@/components/PartnerLogos';
import GraphVisualization from '@/components/GraphVisualization';
import ParallaxSection from '@/components/ParallaxSection';
import ShowcasePortfolio from '@/components/ShowcasePortfolio';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import StatsCounter from '@/components/StatsCounter';
import ScrollPopup from '@/components/ScrollPopup';
import Footer from '@/components/Footer';

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient} data-id="hyuvdvxyt" data-path="src/App.tsx">
      <ThemeProvider data-id="h7k9qjwoy" data-path="src/App.tsx">
        <TooltipProvider data-id="zme53rel2" data-path="src/App.tsx">
          <Router data-id="fuy8rozl0" data-path="src/App.tsx">
            <div className="min-h-screen bg-void-black text-electric-white overflow-x-hidden" data-id="y21v1ygn3" data-path="src/App.tsx">
              <AnimatePresence mode="wait" data-id="7e6qfoqxa" data-path="src/App.tsx">
                {isLoading ?
                <CustomLoader key="loader" onComplete={handleLoadingComplete} data-id="0yyg1ps6l" data-path="src/App.tsx" /> :

                <main key="main" className="relative" data-id="glf247boz" data-path="src/App.tsx">
                    {/* Geometric Background Pattern */}
                    <div className="fixed inset-0 pointer-events-none z-0" data-id="558t8rmlq" data-path="src/App.tsx">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-electric-cyan opacity-5 animate-geometric-spin" data-id="tmvz010re" data-path="src/App.tsx"></div>
                      <div className="absolute top-1/4 right-0 w-48 h-48 bg-electric-magenta opacity-5 animate-morph-shift" data-id="rjnn6ani4" data-path="src/App.tsx"></div>
                      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-electric-yellow opacity-5 animate-electric-pulse" data-id="1zq6vchat" data-path="src/App.tsx"></div>
                    </div>
                    
                    <Navigation data-id="jholxcswn" data-path="src/App.tsx" />
                    <HeroBanner data-id="xszt08vcr" data-path="src/App.tsx" />
                    <ProductGallery data-id="oqxyhem4u" data-path="src/App.tsx" />
                    <ServiceCards data-id="u86kqgdkl" data-path="src/App.tsx" />
                    <InteractiveFeatures data-id="hjqn1bpca" data-path="src/App.tsx" />
                    <PartnerLogos data-id="cj6u3uq5b" data-path="src/App.tsx" />
                    <GraphVisualization data-id="ut7qrq9rk" data-path="src/App.tsx" />
                    <ParallaxSection data-id="pkoxg1yq7" data-path="src/App.tsx" />
                    <ShowcasePortfolio data-id="iqpuu72wz" data-path="src/App.tsx" />
                    <TestimonialsSlider data-id="81x6leke7" data-path="src/App.tsx" />
                    <StatsCounter data-id="lxru24ckn" data-path="src/App.tsx" />
                    <Footer data-id="wjpzl9ti0" data-path="src/App.tsx" />
                    <ScrollPopup data-id="vt84j16m8" data-path="src/App.tsx" />
                  </main>
                }
              </AnimatePresence>
              <Toaster data-id="m7bbwesve" data-path="src/App.tsx" />
            </div>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>);

}

export default App;