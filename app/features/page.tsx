"use client";

import { Card } from "@/components/ui/card";
import {
  Video,
  BarChart3,
  Users,
  Trophy,
  Newspaper,
  Shield,
  Play,
  TrendingUp,
  Calendar,
  Bell,
  MessageSquare,
  Eye,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Trophy,
    title: "Match Coverage",
    description:
      "Comprehensive coverage of matches across African leagues with live scores, detailed statistics, and match events timeline.",
    details: [
      "Live match updates and scores",
      "Formation views with player positions",
      "Minute-by-minute commentary",
      "Match highlights and key moments",
    ],
  },
  {
    icon: Users,
    title: "Player Profiles",
    description:
      "Detailed profiles for thousands of players across the continent, tracking their journey and performance.",
    details: [
      "Complete player statistics",
      "Career history and achievements",
      "Performance analytics",
      "Transfer news and updates",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Statistics",
    description:
      "Deep dive into the numbers that matter with comprehensive statistics for players, teams, and leagues.",
    details: [
      "Goals, assists, and appearances",
      "Shooting accuracy and passing stats",
      "Defensive metrics and tackles",
      "Team performance analytics",
    ],
  },
  {
    icon: Newspaper,
    title: "News & Stories",
    description:
      "Stay updated with the latest news, match reports, transfer rumors, and exclusive stories from across African football.",
    details: [
      "Breaking news and updates",
      "Match reports and analysis",
      "Player interviews and features",
      "Transfer market coverage",
    ],
  },
  {
    icon: Calendar,
    title: "Fixtures & Results",
    description:
      "Never miss a match with our comprehensive fixtures calendar and instant results from leagues across Africa.",
    details: [
      "Upcoming fixtures by league",
      "Historical results archive",
      "Head-to-head records",
      "Venue and timing information",
    ],
  },
  {
    icon: Video,
    title: "Video Highlights",
    description:
      "Watch the best moments from matches with curated video highlights and goal compilations.",
    details: [
      "Match highlight reels",
      "Goal of the week features",
      "Player skill compilations",
      "Tactical analysis videos",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Bell,
    title: "Match Notifications",
    description: "Get instant alerts for goals, cards, and match results",
  },
  {
    icon: MessageSquare,
    title: "Community Engagement",
    description: "Comment, like, and discuss with fellow fans",
  },
  {
    icon: TrendingUp,
    title: "League Standings",
    description: "Real-time league tables and championship tracking",
  },
  {
    icon: Eye,
    title: "Live Commentary",
    description: "Professional commentary for featured matches",
  },
  {
    icon: Shield,
    title: "Verified Data",
    description: "Accurate and verified statistics from official sources",
  },
  {
    icon: Play,
    title: "Match Replays",
    description: "Watch full match replays when available",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-primary bg-clip-text text-transparent">
            Platform Features
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to follow, analyze, and enjoy African football
            at your fingertips. Built by fans, for fans.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white border border-gray-200 p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 text-sm"
                    >
                      <span className="text-primary-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            And Much More
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Additional features that make Afrigoals your complete African
            football companion
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-primary-400/20 to-primary-600/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call-to-Action */}
        <Card className="bg-primary border-none p-12 text-center shadow-lg shadow-primary-400/30">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Experience African Football?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of fans already following their favorite teams and
            players on Afrigoals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/matches"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
            >
              View Matches
            </a>
            <a
              href="/news"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Latest News
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}
