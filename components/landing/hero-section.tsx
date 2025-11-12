'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/50 to-black" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-neutral-300">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
              Celebrating African Football Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Uniting Africa Through
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-blue-500 bg-clip-text text-transparent">
              The Beautiful Game
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the passion, talent, and stories of African football. Follow your favorite teams,
            track player journeys, and connect with the continent's vibrant football community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary-500 text-white hover:bg-primary-600 px-8 py-6 text-base font-medium rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore Matches
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-base font-medium rounded-full group transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Highlights
            </Button>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-neutral-500">African Leagues</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-neutral-500">Football Clubs</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-sm text-neutral-500">Players</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-neutral-500 animate-bounce">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
