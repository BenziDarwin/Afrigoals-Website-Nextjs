import MatchDetailClient from './match-detail-client';
import { mockMatches } from '@/lib/mock-api';

export async function generateStaticParams() {
  return mockMatches.map(match => ({ id: match.id }));
}

export default function MatchDetailPage({ params }: { params: { id: string } }) {
  return <MatchDetailClient matchId={params.id} />;
}
