"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { mockMatches, mockClubs } from "@/lib/mock-api";
import {
  mockFormations,
  mockPlayersEnhanced,
  mockMatchEvents,
} from "@/lib/mock-data-enhanced";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { PlayerStatsDialog } from "@/components/matches/player-stats-dialog";
import { MatchEvents } from "@/components/matches/match-event";

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
  const matchEvents = mockMatchEvents.find((me) => me.match_id === matchId);

  if (!match || !homeClub || !awayClub) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p className="text-lg font-medium">Match not found</p>
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
          <Badge className="bg-red-500 animate-pulse text-sm sm:text-base px-3 py-1">
            LIVE
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-green-600 text-sm sm:text-base px-3 py-1">
            FULL TIME
          </Badge>
        );
      case "scheduled":
        return (
          <Badge
            variant="outline"
            className="border-border text-muted-foreground text-sm sm:text-base px-3 py-1"
          >
            UPCOMING
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Matches
        </button>

        <Card className="p-6 sm:p-8 mb-8 bg-card border border-border shadow-sm">
          <div className="text-center mb-6">
            <div className="text-sm sm:text-base text-muted-foreground mb-2">
              {format(new Date(match.match_date), "EEEE, MMMM d, yyyy - HH:mm")}
            </div>
            <div className="text-sm sm:text-base text-muted-foreground mb-4">
              {match.venue}
            </div>
            {getStatusBadge(match.status)}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-8 items-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  {homeClub.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold">{homeClub.name}</h2>
            </div>

            <div className="text-center">
              {match.status === "completed" || match.status === "live" ? (
                <div className="text-3xl sm:text-6xl font-bold">
                  {match.home_score} - {match.away_score}
                </div>
              ) : (
                <div className="text-xl sm:text-3xl font-bold text-muted-foreground">
                  VS
                </div>
              )}
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  {awayClub.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold">{awayClub.name}</h2>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {homeFormation && awayFormation && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
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

          <div className="lg:col-span-1">
            {matchEvents && (
              <MatchEvents
                events={matchEvents.events}
                isLive={match.status === "live"}
              />
            )}
          </div>
        </div>
      </div>

      <PlayerStatsDialog
        player={selectedPlayer}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
}

function FormationBoard({ formation, clubName, onPlayerClick }: any) {
  return (
    <Card className="p-4 sm:p-6 bg-card border border-border">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">{clubName}</h3>

      <div
        className="relative bg-gradient-to-b from-green-900/20 to-green-800/20 rounded-lg overflow-hidden"
        style={{ minHeight: "500px" }}
      >
        <div className="absolute inset-0 border-2 border-border/20 rounded-lg" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border/20" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-24 sm:h-24 border-2 border-border/20 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute top-2 right-2 bg-card/70 px-3 py-1 rounded text-sm sm:text-base font-semibold">
          {formation.formation}
        </div>

        {formation.lineup.map((player: any, index: number) => (
          <button
            key={index}
            onClick={() => onPlayerClick(player.player_id)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${player.x}%`, top: `${player.y}%` }}
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary border-2 border-border flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xs sm:text-sm">
                  {player.jersey_number}
                </span>
              </div>
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card/80 px-2 py-1 rounded text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {player.name}
              </div>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
        Click on any player to view detailed statistics
      </p>
    </Card>
  );
}
