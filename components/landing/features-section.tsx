"use client";

import { useEffect, useRef, useState } from "react";
import {
  Video,
  BarChart3,
  Users,
  Trophy,
  Newspaper,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Video Analytics",
    description:
      "Upload match videos and get AI-powered insights on player performance, tactics, and key moments.",
  },
  {
    icon: BarChart3,
    title: "Advanced Statistics",
    description:
      "Comprehensive player and team statistics including goals, assists, possession, and heat maps.",
  },
  {
    icon: Users,
    title: "League Management",
    description:
      "Complete tools for league managers to organize fixtures, manage teams, and track standings.",
  },
  {
    icon: Trophy,
    title: "Club Dashboard",
    description:
      "Dedicated dashboards for clubs to manage players, formations, and match preparations.",
  },
  {
    icon: Newspaper,
    title: "News & Updates",
    description:
      "Stay updated with real-time match reports, news articles, and video highlights.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description:
      "Role-based access control ensuring data security and proper permission management.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = feature.icon;

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="p-8 h-full bg-card border-border hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>

        <h3 className="text-xl font-semibold mb-3 text-foreground">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </Card>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to elevate African football to the next
            level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
