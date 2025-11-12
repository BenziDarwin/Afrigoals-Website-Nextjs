'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Match, Club } from '@/lib/supabase';
import { format } from 'date-fns';
import { Calendar, MapPin } from 'lucide-react';

interface MatchCardProps {
  match: Match & {
    home_club?: Club;
    away_club?: Club;
  };
}

export function MatchCard({ match }: MatchCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-red-500 animate-pulse';
      case 'completed':
        return 'bg-green-500';
      case 'scheduled':
        return 'bg-blue-500';
      case 'cancelled':
        return 'bg-neutral-500';
      default:
        return 'bg-neutral-500';
    }
  };

  return (
    <Card className="p-6 bg-neutral-800 border-neutral-700 hover:border-primary-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-sm text-neutral-400">
          <Calendar size={16} />
          <span>{format(new Date(match.match_date), 'MMM d, yyyy - HH:mm')}</span>
        </div>
        <Badge className={`${getStatusColor(match.status)} text-white capitalize`}>
          {match.status}
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-4 items-center mb-4">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden">
            {match.home_club?.logo_url ? (
              <img src={match.home_club.logo_url} alt={match.home_club.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-neutral-500">
                {match.home_club?.name?.charAt(0) || 'H'}
              </span>
            )}
          </div>
          <p className="text-white font-semibold">{match.home_club?.name || 'Home Team'}</p>
        </div>

        <div className="text-center">
          {match.status === 'completed' || match.status === 'live' ? (
            <div className="text-4xl font-bold text-white">
              {match.home_score} - {match.away_score}
            </div>
          ) : (
            <div className="text-2xl font-bold text-neutral-500">VS</div>
          )}
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden">
            {match.away_club?.logo_url ? (
              <img src={match.away_club.logo_url} alt={match.away_club.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-neutral-500">
                {match.away_club?.name?.charAt(0) || 'A'}
              </span>
            )}
          </div>
          <p className="text-white font-semibold">{match.away_club?.name || 'Away Team'}</p>
        </div>
      </div>

      {match.venue && (
        <div className="flex items-center justify-center text-sm text-neutral-400">
          <MapPin size={16} className="mr-1" />
          <span>{match.venue}</span>
        </div>
      )}
    </Card>
  );
}
