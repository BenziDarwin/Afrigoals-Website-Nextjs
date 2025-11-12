'use client';

import { Card } from '@/components/ui/card';
import { MatchFormation } from '@/lib/supabase';

interface FormationViewProps {
  formation: MatchFormation;
  clubName: string;
}

const formationLayouts: Record<string, number[][]> = {
  '4-4-2': [
    [50],
    [20, 40, 60, 80],
    [20, 40, 60, 80],
    [30, 70],
  ],
  '4-3-3': [
    [50],
    [20, 40, 60, 80],
    [25, 50, 75],
    [20, 50, 80],
  ],
  '3-5-2': [
    [50],
    [25, 50, 75],
    [15, 30, 50, 70, 85],
    [35, 65],
  ],
  '4-2-3-1': [
    [50],
    [20, 40, 60, 80],
    [35, 65],
    [20, 50, 80],
    [50],
  ],
  '3-4-3': [
    [50],
    [25, 50, 75],
    [20, 40, 60, 80],
    [20, 50, 80],
  ],
};

export function FormationView({ formation, clubName }: FormationViewProps) {
  const layout = formationLayouts[formation.formation] || formationLayouts['4-4-2'];
  const lineup = Array.isArray(formation.lineup) ? formation.lineup : [];

  let playerIndex = 0;

  return (
    <Card className="p-6 bg-neutral-800 border-neutral-700">
      <h3 className="text-xl font-semibold text-white mb-4">{clubName}</h3>
      <div className="bg-gradient-to-b from-green-900/20 to-green-800/20 rounded-lg p-8 relative" style={{ minHeight: '500px' }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />

        <div className="absolute inset-0 border-2 border-white/20 rounded-lg" />
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative h-full flex flex-col justify-between py-4">
          {layout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-around items-center">
              {row.map((position, posIndex) => {
                const player = lineup[playerIndex];
                playerIndex++;

                return (
                  <div
                    key={posIndex}
                    className="flex flex-col items-center"
                    style={{ marginLeft: `${position}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-500 border-2 border-white flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">
                        {player?.jersey_number || playerIndex}
                      </span>
                    </div>
                    <span className="text-white text-xs mt-1 bg-black/50 px-2 py-0.5 rounded whitespace-nowrap">
                      {player?.name || `Player ${playerIndex}`}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="absolute top-2 right-2 bg-black/50 px-3 py-1 rounded">
          <span className="text-white font-semibold">{formation.formation}</span>
        </div>
      </div>
    </Card>
  );
}
