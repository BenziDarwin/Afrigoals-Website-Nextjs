"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { mockMatches, mockClubs } from "@/lib/mock-api";
import { mockFormations, mockPlayersEnhanced } from "@/lib/mock-data-enhanced";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { PlayerStatsDialog } from "@/components/matches/player-stats-dialog";

export default function MatchDetailClient({ matchId }: { matchId: string }) {
  const router = useRouter();
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const match = mockMatches.find((m) => m.id === matchId);
  const homeClub = mockClubs.find((c) => c.id === match?.home_club_id);
  const awayClub = mockClubs.find((c) => c.id === match?.away_club_id);
  const homeFormation = mockFormations.find(
    (f) => f.match_id === matchId && f.club_id === homeClub?.id,
  );
  const awayFormation = mockFormations.find(
    (f) => f.match_id === matchId && f.club_id === awayClub?.id,
  );

  if (!match || !homeClub || !awayClub) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Match not found
      </div>
    );
  }

  const handlePlayerClick = (playerId: string) => {
    const player = mockPlayersEnhanced.find((p) => p.id === playerId);
    if (player) {
      setSelectedPlayer(player);
      setDialogOpen(true);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return (
          <Badge className="bg-red-500 animate-pulse text-lg px-4 py-1">
            LIVE
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-green-600 text-lg px-4 py-1">FULL TIME</Badge>
        );
      case "scheduled":
        return (
          <Badge
            variant="outline"
            className="border-neutral-600 text-neutral-400 text-lg px-4 py-1"
          >
            UPCOMING
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-neutral-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Matches
          </button>

          <Card className="bg-neutral-900 border-neutral-800 p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-sm text-neutral-500 mb-2">
                {format(
                  new Date(match.match_date),
                  "EEEE, MMMM d, yyyy - HH:mm",
                )}
              </div>
              <div className="text-sm text-neutral-500 mb-4">{match.venue}</div>
              {getStatusBadge(match.status)}
            </div>

            <div className="grid grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-400">
                    {homeClub.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {homeClub.name}
                </h2>
              </div>

              <div className="text-center">
                {match.status === "completed" || match.status === "live" ? (
                  <div className="text-6xl font-bold text-white">
                    {match.home_score} - {match.away_score}
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-neutral-500">VS</div>
                )}
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-400">
                    {awayClub.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {awayClub.name}
                </h2>
              </div>
            </div>
          </Card>

          {homeFormation && awayFormation && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FormationBoard
                formation={homeFormation}
                clubName={homeClub.name}
                onPlayerClick={handlePlayerClick}
              />
              <FormationBoard
                formation={awayFormation}
                clubName={awayClub.name}
                onPlayerClick={handlePlayerClick}
              />
            </div>
          )}
        </div>
      </div>

      <PlayerStatsDialog
        player={selectedPlayer}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />

      <Footer />
    </div>
  );
}

function FormationBoard({ formation, clubName, onPlayerClick }: any) {
  return (
    <Card className="bg-neutral-900 border-neutral-800 p-6">
      <h3 className="text-xl font-semibold text-white mb-4">{clubName}</h3>
      <div
        className="relative bg-gradient-to-b from-green-900/30 to-green-800/30 rounded-lg"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px),
            repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
          `,
          minHeight: "600px",
        }}
      >
        <div className="absolute inset-0 border-2 border-white/10 rounded-lg" />
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute top-2 right-2 bg-black/50 px-3 py-1 rounded text-white font-semibold text-sm">
          {formation.formation}
        </div>

        {formation.lineup.map((player: any, index: number) => (
          <button
            key={index}
            onClick={() => onPlayerClick(player.player_id)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{
              left: `${player.x}%`,
              top: `${player.y}%`,
            }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary-500 border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">
                  {player.jersey_number}
                </span>
              </div>
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-2 py-1 rounded text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {player.name}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 text-sm text-neutral-400">
        <p>Click on any player to view detailed statistics</p>
      </div>
    </Card>
  );
}
