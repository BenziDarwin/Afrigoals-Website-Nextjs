'use client';

import { useState } from 'react';
import { Navigation } from '@/components/landing/navigation';
import { Footer } from '@/components/landing/footer';
import { mockMatches, mockClubs, mockLeagues } from '@/lib/mock-api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

export default function MatchesPage() {
  const [selectedLeague, setSelectedLeague] = useState<string>('all');
  const router = useRouter();

  const matchesWithClubs = mockMatches.map(match => ({
    ...match,
    home_club: mockClubs.find(c => c.id === match.home_club_id),
    away_club: mockClubs.find(c => c.id === match.away_club_id),
    league: mockLeagues.find(l => l.id === match.league_id),
  }));

  const filteredMatches = selectedLeague === 'all'
    ? matchesWithClubs
    : matchesWithClubs.filter(m => m.league_id === selectedLeague);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-red-500 animate-pulse">LIVE</Badge>;
      case 'completed':
        return <Badge className="bg-green-600">FT</Badge>;
      case 'scheduled':
        return <Badge variant="outline" className="border-neutral-600 text-neutral-400">SCH</Badge>;
      default:
        return null;
    }
  };

  const handleMatchClick = (matchId: string) => {
    router.push(`/matches/${matchId}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fixtures & Results
            </h1>
            <p className="text-xl text-neutral-400">
              View live scores, upcoming fixtures, and match results
            </p>
          </div>

          <div className="mb-6">
            <Select value={selectedLeague} onValueChange={setSelectedLeague}>
              <SelectTrigger className="w-64 bg-neutral-900 border-neutral-800 text-white">
                <SelectValue placeholder="Select League" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800">
                <SelectItem value="all" className="text-white">All Leagues</SelectItem>
                {mockLeagues.map(league => (
                  <SelectItem key={league.id} value={league.id} className="text-white">
                    {league.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-800 hover:bg-neutral-900">
                  <TableHead className="text-neutral-400">Date</TableHead>
                  <TableHead className="text-neutral-400">Home</TableHead>
                  <TableHead className="text-neutral-400 text-center">Score</TableHead>
                  <TableHead className="text-neutral-400">Away</TableHead>
                  <TableHead className="text-neutral-400">Venue</TableHead>
                  <TableHead className="text-neutral-400 text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMatches.map((match) => (
                  <TableRow
                    key={match.id}
                    className="border-neutral-800 hover:bg-neutral-800/50 cursor-pointer transition-colors"
                    onClick={() => handleMatchClick(match.id)}
                  >
                    <TableCell className="text-neutral-300">
                      {format(new Date(match.match_date), 'MMM d, HH:mm')}
                    </TableCell>
                    <TableCell className="text-white font-medium">
                      {match.home_club?.name || 'TBD'}
                    </TableCell>
                    <TableCell className="text-center">
                      {match.status === 'completed' || match.status === 'live' ? (
                        <span className="text-white font-bold text-lg">
                          {match.home_score} - {match.away_score}
                        </span>
                      ) : (
                        <span className="text-neutral-500">vs</span>
                      )}
                    </TableCell>
                    <TableCell className="text-white font-medium">
                      {match.away_club?.name || 'TBD'}
                    </TableCell>
                    <TableCell className="text-neutral-400 text-sm">
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
            <div className="text-center py-12 text-neutral-500">
              No matches found for the selected league
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
