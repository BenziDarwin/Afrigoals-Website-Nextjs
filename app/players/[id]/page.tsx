import PlayerProfileClient from './player-profile-client';
import { mockPlayersEnhanced } from '@/lib/mock-data-enhanced';

export async function generateStaticParams() {
  return mockPlayersEnhanced.map(player => ({ id: player.id }));
}

export default function PlayerProfilePage({ params }: { params: { id: string } }) {
  return <PlayerProfileClient playerId={params.id} />;
}
