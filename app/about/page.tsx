"use client";

import { Card } from "@/components/ui/card";
import { Heart, Target, Users, Globe, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-primary bg-clip-text text-transparent">
            About Afrigoals
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are on a mission to celebrate and elevate African football,
            connecting fans, players, and clubs across the continent through the
            beautiful game.
          </p>
        </div>

        {/* Passion & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="bg-white border border-gray-200 p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Passion</h2>
            <p className="text-gray-600 leading-relaxed">
              Football is more than a sport in Africa—it's a way of life, a
              source of pride, and a unifying force. We believe African football
              deserves a platform that captures its unique energy, talent, and
              stories.
            </p>
          </Card>

          <Card className="bg-white border border-gray-200 p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To create the ultimate destination for African football—a place
              where every match, every player, and every moment is celebrated.
              We're building bridges between fans and the game they love.
            </p>
          </Card>
        </div>

        {/* What Drives Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community First",
                desc: "Building a vibrant community of African football enthusiasts who share their passion and connect with each other.",
              },
              {
                icon: Globe,
                title: "Continental Coverage",
                desc: "From Lagos to Nairobi, Cairo to Cape Town—we cover football across all corners of the African continent.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Committed to showcasing the excellence of African football and the incredible talent across the continent.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary-400/20 to-primary-600/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call-to-Action */}
        <Card className="bg-primary border-none p-12 text-center shadow-lg shadow-primary-400/30">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Whether you're a fan, player, coach, or club, Afrigoals is your
            home. Together, we're writing the next chapter of African football.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/matches"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
            >
              Explore Matches
            </a>
            <a
              href="/news"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Read Latest News
            </a>
          </div>
        </Card>

        {/* Our Story */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Afrigoals was born from a simple observation: African football has
              incredible talent, passionate fans, and thrilling matches, yet it
              often lacks the digital platform it deserves.
            </p>
            <p>
              We set out to change that. Our platform brings together match
              coverage, player profiles, league standings, and real-time
              updates—all in one place. But more than that, we're creating a
              community where African football fans can connect, celebrate, and
              share their love for the game.
            </p>
            <p>
              From grassroots leagues to professional competitions, from rising
              stars to established legends, we're here to tell the complete
              story of African football. Because every goal, every save, every
              moment matters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
