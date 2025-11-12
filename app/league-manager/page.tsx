"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Building2, CalendarDays, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import {
  mockLeagues,
  mockClubs,
  mockMatches,
  mockPlayers,
} from "@/lib/mock-api";

export default function LeagueManagerDashboard() {
  const [stats, setStats] = useState({
    clubs: 0,
    matches: 0,
    upcomingMatches: 0,
    totalPlayers: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setTimeout(() => {
      const upcomingMatches = mockMatches.filter(
        (m) => m.status === "scheduled",
      );

      setStats({
        clubs: mockClubs.length,
        matches: mockMatches.length,
        upcomingMatches: upcomingMatches.length,
        totalPlayers: mockPlayers.length,
      });
    }, 500);
  };

  const statCards = [
    {
      title: "Clubs in League",
      value: stats.clubs,
      icon: Building2,
      color: "text-blue-500",
    },
    {
      title: "Total Matches",
      value: stats.matches,
      icon: CalendarDays,
      color: "text-green-500",
    },
    {
      title: "Upcoming Matches",
      value: stats.upcomingMatches,
      icon: TrendingUp,
      color: "text-purple-500",
    },
    {
      title: "Total Players",
      value: stats.totalPlayers,
      icon: Users,
      color: "text-orange-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            League Manager Dashboard
          </h1>
          <p className="text-neutral-400">
            Manage your league fixtures, teams, and standings
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
              League Standings
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-6 gap-2 text-neutral-400 text-sm border-b border-neutral-700 pb-2">
                <div className="col-span-3">Team</div>
                <div className="text-center">P</div>
                <div className="text-center">W</div>
                <div className="text-center">Pts</div>
              </div>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-6 gap-2 text-white items-center"
                >
                  <div className="col-span-3 flex items-center space-x-2">
                    <span className="text-neutral-500">{i + 1}</span>
                    <span>Team {i + 1}</span>
                  </div>
                  <div className="text-center">{10 - i}</div>
                  <div className="text-center">{8 - i}</div>
                  <div className="text-center font-bold">{24 - i * 3}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-neutral-800 border-neutral-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
                Schedule New Match
              </button>
              <button className="w-full text-left px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
                Update Match Results
              </button>
              <button className="w-full text-left px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
                View League Statistics
              </button>
              <button className="w-full text-left px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
                Manage Clubs
              </button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
