"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { mockMatches, mockClubs, mockLeagues } from "@/lib/mock-api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export default function MatchesPage() {
  const [selectedLeague, setSelectedLeague] = useState<string>("all");
  const router = useRouter();

  const matchesWithClubs = mockMatches.map((match) => ({
    ...match,
    home_club: mockClubs.find((c) => c.id === match.home_club_id),
    away_club: mockClubs.find((c) => c.id === match.away_club_id),
    league: mockLeagues.find((l) => l.id === match.league_id),
  }));

  const filteredMatches =
    selectedLeague === "all"
      ? matchesWithClubs
      : matchesWithClubs.filter((m) => m.league_id === selectedLeague);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-destructive animate-pulse">LIVE</Badge>;
      case "completed":
        return <Badge className="bg-accent">FT</Badge>;
      case "scheduled":
        return (
          <Badge
            variant="outline"
            className="border-muted text-muted-foreground"
          >
            SCH
          </Badge>
        );
      default:
        return null;
    }
  };

  const handleMatchClick = (matchId: string) => {
    router.push(`/matches/${matchId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fixtures & Results
            </h1>
            <p className="text-xl text-muted-foreground">
              View live scores, upcoming fixtures, and match results
            </p>
          </div>

          <div className="mb-6">
            <Select value={selectedLeague} onValueChange={setSelectedLeague}>
              <SelectTrigger className="w-64 bg-card border-border text-foreground">
                <SelectValue placeholder="Select League" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border text-foreground">
                <SelectItem value="all">All Leagues</SelectItem>
                {mockLeagues.map((league) => (
                  <SelectItem key={league.id} value={league.id}>
                    {league.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-muted/20">
                  <TableHead>Date</TableHead>
                  <TableHead>Home</TableHead>
                  <TableHead className="text-center">Score</TableHead>
                  <TableHead>Away</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMatches.map((match) => (
                  <TableRow
                    key={match.id}
                    className="hover:bg-muted/10 cursor-pointer transition-colors"
                    onClick={() => handleMatchClick(match.id)}
                  >
                    <TableCell>
                      {format(new Date(match.match_date), "MMM d, HH:mm")}
                    </TableCell>
                    <TableCell className="font-medium">
                      {match.home_club?.name || "TBD"}
                    </TableCell>
                    <TableCell className="text-center">
                      {match.status === "completed" ||
                      match.status === "live" ? (
                        <span className="font-bold text-lg">
                          {match.home_score} - {match.away_score}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">vs</span>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">
                      {match.away_club?.name || "TBD"}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {match.venue}
                    </TableCell>
                    <TableCell className="text-right">
                      {getStatusBadge(match.status)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredMatches.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No matches found for the selected league
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
