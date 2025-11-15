"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />

      {/* animated blobs using primary + accent colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* content */}
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* mini badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-card/40 backdrop-blur-sm border border-border text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Celebrating African Football Excellence
            </span>
          </div>

          {/* heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-muted-foreground to-muted bg-clip-text text-foreground">
              Uniting Africa Through
            </span>
            <br />
            <span className="bg-primary bg-clip-text text-transparent">
              The Beautiful Game
            </span>
          </h1>

          {/* description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the passion, talent, and stories of African football.
            Follow your favorite teams, track player journeys, and connect with
            the continent’s vibrant football community.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-6 text-base font-medium rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore Matches
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted/20 backdrop-blur-sm px-8 py-6 text-base font-medium rounded-full group transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Highlights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
