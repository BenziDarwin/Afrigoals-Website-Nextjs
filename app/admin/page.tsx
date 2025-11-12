"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Trophy, Building2, Users, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import {
  mockLeagues,
  mockClubs,
  mockUsers,
  mockNewsArticles,
} from "@/lib/mock-api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    leagues: 0,
    clubs: 0,
    users: 0,
    articles: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setTimeout(() => {
      setStats({
        leagues: mockLeagues.length,
        clubs: mockClubs.length,
        users: mockUsers.length,
        articles: mockNewsArticles.length,
      });
    }, 500);
  };

  const statCards = [
    {
      title: "Total Leagues",
      value: stats.leagues,
      icon: Trophy,
      color: "text-blue-500",
    },
    {
      title: "Total Clubs",
      value: stats.clubs,
      icon: Building2,
      color: "text-green-500",
    },
    {
      title: "Total Users",
      value: stats.users,
      icon: Users,
      color: "text-purple-500",
    },
    {
      title: "Published Articles",
      value: stats.articles,
      icon: Newspaper,
      color: "text-orange-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-neutral-400">
            Manage all aspects of the Afrigoals platform
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
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 text-neutral-400"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  <span className="text-sm">
                    System activity log item {i + 1}
                  </span>
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
                Create New League
              </button>
              <button className="w-full text-left px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
                Add New Club
              </button>
              <button className="w-full text-left px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
                Publish Article
              </button>
              <button className="w-full text-left px-4 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors text-white">
                Manage Users
              </button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
