"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Users, CalendarDays, Video, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { mockClubs, mockPlayers, mockMatches } from "@/lib/mock-api";

export default function ClubManagerDashboard() {
  const [stats, setStats] = useState({
    players: 0,
    matches: 0,
    videos: 0,
    wins: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setTimeout(() => {
      const club = mockClubs[0];
      const clubMatches = mockMatches.filter(
        (m) => m.home_club_id === club.id || m.away_club_id === club.id,
      );
      const wins = clubMatches.filter(
        (m) =>
          (m.home_club_id === club.id && m.home_score > m.away_score) ||
          (m.away_club_id === club.id && m.away_score > m.home_score),
      ).length;

      setStats({
        players: mockPlayers.length,
        matches: clubMatches.length,
        videos: 0,
        wins,
      });
    }, 500);
  };

  const statCards = [
    {
      title: "Squad Players",
      value: stats.players,
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Matches Played",
      value: stats.matches,
      icon: CalendarDays,
      color: "text-green-500",
    },
    {
      title: "Match Videos",
      value: stats.videos,
      icon: Video,
      color: "text-purple-500",
    },
    {
      title: "Wins",
      value: stats.wins,
      icon: TrendingUp,
      color: "text-orange-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Club Manager Dashboard
          </h1>
          <p className="text-neutral-400">
            Manage your team, players, and match preparations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.title}
                className="p-6 bg-neutral-800 border-neutral-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`${stat.color} w-8 h-8`} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-sm">{stat.title}</div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-neutral-800 border-neutral-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Top Players
            </h2>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-neutral-700 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        Player {i + 1}
                      </div>
                      <div className="text-neutral-400 text-sm">Forward</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{10 - i}</div>
                    <div className="text-neutral-400 text-sm">Goals</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-neutral-800 border-neutral-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Upcoming Matches
            </h2>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-4 bg-neutral-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-neutral-400 text-sm">
                      Match {i + 1}
                    </span>
                    <span className="text-primary-400 text-sm">3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Your Club</span>
                    <span className="text-neutral-500">VS</span>
                    <span className="text-white">Opponent {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 px-4 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors text-white font-medium">
              View All Matches
            </button>
          </Card>
        </div>

        <Card className="p-6 bg-neutral-800 border-neutral-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <button className="px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
              Add New Player
            </button>
            <button className="px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
              Upload Match Video
            </button>
            <button className="px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
              Set Formation
            </button>
            <button className="px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
              View Statistics
            </button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
