import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole = 'league_manager' | 'club_manager' | 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface League {
  id: string;
  name: string;
  description?: string;
  logo_url?: string;
  manager_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Club {
  id: string;
  league_id: string;
  name: string;
  logo_url?: string;
  manager_id?: string;
  founded_year?: number;
  stadium?: string;
  created_at: string;
  updated_at: string;
}

export interface Player {
  id: string;
  club_id: string;
  name: string;
  jersey_number: number;
  position: string;
  photo_url?: string;
  date_of_birth?: string;
  nationality?: string;
  created_at: string;
  updated_at: string;
}

export interface Match {
  id: string;
  league_id: string;
  home_club_id: string;
  away_club_id: string;
  match_date: string;
  venue?: string;
  status: 'scheduled' | 'live' | 'completed' | 'cancelled';
  home_score: number;
  away_score: number;
  video_url?: string;
  created_at: string;
  updated_at: string;
}

export interface MatchFormation {
  id: string;
  match_id: string;
  club_id: string;
  formation: string;
  lineup: any[];
  created_at: string;
}

export interface PlayerStatistics {
  id: string;
  player_id: string;
  match_id: string;
  goals: number;
  assists: number;
  minutes_played: number;
  yellow_cards: number;
  red_cards: number;
  shots: number;
  passes: number;
  tackles: number;
  created_at: string;
}

export interface NewsArticle {
  id: string;
  author_id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  category: 'news' | 'blog' | 'match_report';
  published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface NewsFeed {
  id: string;
  type: 'article' | 'video' | 'match_update' | 'external_link';
  title: string;
  description?: string;
  content_url?: string;
  thumbnail_url?: string;
  article_id?: string;
  match_id?: string;
  created_at: string;
  updated_at: string;
}
