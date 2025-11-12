"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { mockPlayersEnhanced } from "@/lib/mock-data-enhanced";
import { mockArticlesDetailed } from "@/lib/mock-data-enhanced";
import { mockClubs } from "@/lib/mock-api";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Lock,
  TrendingUp,
  Trophy,
  Calendar,
  MapPin,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlayerProfileClient({
  playerId,
}: {
  playerId: string;
}) {
  const router = useRouter();
  const [isPremium, setIsPremium] = useState(false);

  const player = mockPlayersEnhanced.find((p) => p.id === playerId);
  const club = mockClubs.find((c) => c.id === player?.club_id);

  const relatedArticles = mockArticlesDetailed.filter((article) =>
    article.content.toLowerCase().includes(player?.name.toLowerCase() || ""),
  );

  if (!player) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Player not found
          </h1>
          <Button onClick={() => router.back()} variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const stats = player.stats || {};
  const age =
    new Date().getFullYear() - new Date(player.date_of_birth).getFullYear();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-lg bg-primary-100 flex items-center justify-center border-2 border-primary-200">
                        <span className="text-5xl font-bold text-primary-600">
                          {player.jersey_number}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {player.name}
                          </h1>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-primary-600">
                              {player.position}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="border-gray-300 text-gray-700"
                            >
                              #{player.jersey_number}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2 text-primary-600" />
                          <span>{player.nationality}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar
                            size={16}
                            className="mr-2 text-primary-600"
                          />
                          <span>{age} years old</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Trophy size={16} className="mr-2 text-primary-600" />
                          <span>{club?.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Season Statistics
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard
                      label="Goals"
                      value={stats.goals || 0}
                      icon={Target}
                    />
                    <StatCard
                      label="Assists"
                      value={stats.assists || 0}
                      icon={TrendingUp}
                    />
                    <StatCard label="Matches" value={stats.matches || 0} />
                    <StatCard label="Minutes" value={stats.minutes || 0} />
                  </div>
                </div>
              </Card>

              <Tabs defaultValue="performance" className="w-full">
                <TabsList className="bg-gray-100 border border-gray-200 w-full justify-start">
                  <TabsTrigger
                    value="performance"
                    className="data-[state=active]:bg-white"
                  >
                    Performance
                  </TabsTrigger>
                  <TabsTrigger
                    value="advanced"
                    className="data-[state=active]:bg-white"
                  >
                    <Lock size={14} className="mr-1" />
                    Advanced Stats
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    className="data-[state=active]:bg-white"
                  >
                    <Lock size={14} className="mr-1" />
                    Career History
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="performance" className="mt-6">
                  <Card className="bg-white border border-gray-200 shadow-sm">
                    <div className="p-6 space-y-4">
                      {player.position !== "Goalkeeper" ? (
                        <>
                          <StatBar
                            label="Shots"
                            value={stats.shots || 0}
                            max={100}
                          />
                          <StatBar
                            label="Passes"
                            value={stats.passes || 0}
                            max={800}
                          />
                          <StatBar
                            label="Tackles"
                            value={stats.tackles || 0}
                            max={100}
                          />
                          <StatBar
                            label="Yellow Cards"
                            value={stats.yellow_cards || 0}
                            max={10}
                            color="yellow"
                          />
                          <StatBar
                            label="Red Cards"
                            value={stats.red_cards || 0}
                            max={3}
                            color="red"
                          />
                        </>
                      ) : (
                        <>
                          <StatBar
                            label="Saves"
                            value={stats.saves || 0}
                            max={100}
                          />
                          <StatBar
                            label="Clean Sheets"
                            value={stats.clean_sheets || 0}
                            max={20}
                          />
                          <StatBar
                            label="Passes"
                            value={stats.passes || 0}
                            max={200}
                          />
                        </>
                      )}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="advanced" className="mt-6">
                  <PremiumContent
                    onSubscribe={() => setIsPremium(true)}
                    isPremium={isPremium}
                  />
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                  <PremiumContent
                    onSubscribe={() => setIsPremium(true)}
                    isPremium={isPremium}
                  />
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Quick Stats
                  </h3>
                  <div className="space-y-3">
                    <QuickStat
                      label="Goals/Match"
                      value={(stats.goals / stats.matches || 0).toFixed(2)}
                    />
                    <QuickStat
                      label="Assists/Match"
                      value={(stats.assists / stats.matches || 0).toFixed(2)}
                    />
                    <QuickStat
                      label="Minutes/Match"
                      value={Math.round(stats.minutes / stats.matches || 0)}
                    />
                    {player.position !== "Goalkeeper" && (
                      <QuickStat
                        label="Shot Accuracy"
                        value="67%"
                        premium={!isPremium}
                      />
                    )}
                  </div>
                </div>
              </Card>

              {relatedArticles.length > 0 && (
                <Card className="bg-white border border-gray-200 shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-3">
                      {relatedArticles.map((article) => (
                        <button
                          key={article.id}
                          onClick={() => router.push(`/news/${article.slug}`)}
                          className="block w-full text-left p-3 hover:bg-gray-50 rounded border border-gray-200 transition-colors"
                        >
                          <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {article.read_time}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 shadow-sm">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Go Premium
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Unlock advanced stats, career history, and exclusive player
                    insights
                  </p>
                  <Button
                    className="w-full bg-primary-600 hover:bg-primary-700"
                    onClick={() => setIsPremium(true)}
                  >
                    Subscribe Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function StatCard({ label, value, icon: Icon }: any) {
  return (
    <div className="p-4 bg-gray-50 rounded border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">{label}</span>
        {Icon && <Icon className="w-4 h-4 text-primary-600" />}
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}

function StatBar({ label, value, max, color = "primary" }: any) {
  const percentage = Math.min((value / max) * 100, 100);
  const colorClasses = {
    primary: "bg-primary-600",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-900 font-semibold">{value}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function QuickStat({ label, value, premium }: any) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-600">{label}</span>
      {premium ? (
        <div className="flex items-center text-gray-400">
          <Lock size={14} className="mr-1" />
          <span className="text-sm font-medium">Premium</span>
        </div>
      ) : (
        <span className="text-sm font-bold text-gray-900">{value}</span>
      )}
    </div>
  );
}

function PremiumContent({ onSubscribe, isPremium }: any) {
  if (isPremium) {
    return (
      <Card className="bg-white border border-gray-200 shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Premium Content Unlocked!
          </h3>
          <p className="text-gray-600">
            Thank you for subscribing! Advanced statistics and insights are now
            available.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <div className="p-8 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="text-gray-400" size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Premium Content
        </h3>
        <p className="text-gray-600 mb-6">
          Subscribe to unlock advanced player statistics, career history, and
          exclusive insights.
        </p>
        <Button
          className="bg-primary-600 hover:bg-primary-700 text-white"
          onClick={onSubscribe}
        >
          Subscribe to Premium
        </Button>
        <p className="text-sm text-gray-500 mt-4">Starting at $9.99/month</p>
      </div>
    </Card>
  );
}
