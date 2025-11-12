'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Activity, Award, AlertCircle, Clock, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PlayerStatsDialogProps {
  player: any;
  open: boolean;
  onClose: () => void;
}

export function PlayerStatsDialog({ player, open, onClose }: PlayerStatsDialogProps) {
  const router = useRouter();

  if (!player) return null;

  const stats = player.stats || {};

  const statCards = [
    { label: 'Goals', value: stats.goals || 0, icon: Target, color: 'text-blue-500' },
    { label: 'Assists', value: stats.assists || 0, icon: TrendingUp, color: 'text-green-500' },
    { label: 'Matches', value: stats.matches || 0, icon: Activity, color: 'text-purple-500' },
    { label: 'Minutes', value: stats.minutes || 0, icon: Clock, color: 'text-orange-500' },
    { label: 'Yellow Cards', value: stats.yellow_cards || 0, icon: AlertCircle, color: 'text-yellow-500' },
    { label: 'Red Cards', value: stats.red_cards || 0, icon: AlertCircle, color: 'text-red-500' },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-900 border-neutral-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Player Statistics</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-primary-500 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">{player.jersey_number}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{player.name}</h2>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary-500">{player.position}</Badge>
                <Badge variant="outline" className="border-neutral-700 text-neutral-300">
                  #{player.jersey_number}
                </Badge>
                <Badge variant="outline" className="border-neutral-700 text-neutral-300">
                  {player.nationality}
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="bg-neutral-800 border-neutral-700 p-4 animate-in fade-in-50 slide-in-from-bottom-5"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-400">{stat.label}</span>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </Card>
              );
            })}
          </div>

          {player.position !== 'Goalkeeper' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-400" />
                Performance Metrics
              </h3>
              <div className="space-y-3">
                <StatBar label="Shots" value={stats.shots || 0} max={100} />
                <StatBar label="Passes" value={stats.passes || 0} max={800} />
                <StatBar label="Tackles" value={stats.tackles || 0} max={100} />
              </div>
            </div>
          )}

          {player.position === 'Goalkeeper' && stats.saves && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-400" />
                Goalkeeper Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-neutral-800 border-neutral-700 p-4">
                  <div className="text-sm text-neutral-400 mb-1">Saves</div>
                  <div className="text-2xl font-bold text-white">{stats.saves}</div>
                </Card>
                <Card className="bg-neutral-800 border-neutral-700 p-4">
                  <div className="text-sm text-neutral-400 mb-1">Clean Sheets</div>
                  <div className="text-2xl font-bold text-white">{stats.clean_sheets}</div>
                </Card>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-neutral-800">
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <span className="text-neutral-500">Age:</span>
                <span className="text-white ml-2">
                  {new Date().getFullYear() - new Date(player.date_of_birth).getFullYear()} years
                </span>
              </div>
              <div>
                <span className="text-neutral-500">Goals/Match:</span>
                <span className="text-white ml-2">
                  {stats.matches ? (stats.goals / stats.matches).toFixed(2) : '0.00'}
                </span>
              </div>
            </div>
            <Button
              className="w-full bg-primary-600 hover:bg-primary-700"
              onClick={() => {
                onClose();
                router.push(`/players/${player.id}`);
              }}
            >
              View Full Profile
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function StatBar({ label, value, max }: { label: string; value: number; max: number }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-neutral-400">{label}</span>
        <span className="text-white font-medium">{value}</span>
      </div>
      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
