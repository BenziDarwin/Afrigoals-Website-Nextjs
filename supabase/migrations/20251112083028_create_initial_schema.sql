/*
  # Afrigoals Initial Database Schema

  1. New Tables
    - `users`
      - `id` (uuid, primary key) - links to auth.users
      - `email` (text)
      - `full_name` (text)
      - `role` (text) - 'league_manager', 'club_manager', 'admin', 'user'
      - `avatar_url` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `leagues`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text, nullable)
      - `logo_url` (text, nullable)
      - `manager_id` (uuid, foreign key to users)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `clubs`
      - `id` (uuid, primary key)
      - `league_id` (uuid, foreign key to leagues)
      - `name` (text)
      - `logo_url` (text, nullable)
      - `manager_id` (uuid, foreign key to users)
      - `founded_year` (integer, nullable)
      - `stadium` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `players`
      - `id` (uuid, primary key)
      - `club_id` (uuid, foreign key to clubs)
      - `name` (text)
      - `jersey_number` (integer)
      - `position` (text)
      - `photo_url` (text, nullable)
      - `date_of_birth` (date, nullable)
      - `nationality` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `matches`
      - `id` (uuid, primary key)
      - `league_id` (uuid, foreign key to leagues)
      - `home_club_id` (uuid, foreign key to clubs)
      - `away_club_id` (uuid, foreign key to clubs)
      - `match_date` (timestamptz)
      - `venue` (text, nullable)
      - `status` (text) - 'scheduled', 'live', 'completed', 'cancelled'
      - `home_score` (integer, default 0)
      - `away_score` (integer, default 0)
      - `video_url` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `match_formations`
      - `id` (uuid, primary key)
      - `match_id` (uuid, foreign key to matches)
      - `club_id` (uuid, foreign key to clubs)
      - `formation` (text) - e.g., '4-4-2', '4-3-3'
      - `lineup` (jsonb) - player positions and details
      - `created_at` (timestamptz)
    
    - `player_statistics`
      - `id` (uuid, primary key)
      - `player_id` (uuid, foreign key to players)
      - `match_id` (uuid, foreign key to matches)
      - `goals` (integer, default 0)
      - `assists` (integer, default 0)
      - `minutes_played` (integer, default 0)
      - `yellow_cards` (integer, default 0)
      - `red_cards` (integer, default 0)
      - `shots` (integer, default 0)
      - `passes` (integer, default 0)
      - `tackles` (integer, default 0)
      - `created_at` (timestamptz)
    
    - `news_articles`
      - `id` (uuid, primary key)
      - `author_id` (uuid, foreign key to users)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text, nullable)
      - `featured_image` (text, nullable)
      - `category` (text) - 'news', 'blog', 'match_report'
      - `published` (boolean, default false)
      - `published_at` (timestamptz, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `news_feed`
      - `id` (uuid, primary key)
      - `type` (text) - 'article', 'video', 'match_update', 'external_link'
      - `title` (text)
      - `description` (text, nullable)
      - `content_url` (text, nullable)
      - `thumbnail_url` (text, nullable)
      - `article_id` (uuid, nullable, foreign key to news_articles)
      - `match_id` (uuid, nullable, foreign key to matches)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for role-based access control
    - Admins have full access
    - League managers can manage their leagues
    - Club managers can manage their clubs
    - Users can read published content
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  role text NOT NULL DEFAULT 'user' CHECK (role IN ('league_manager', 'club_manager', 'admin', 'user')),
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create leagues table
CREATE TABLE IF NOT EXISTS leagues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  logo_url text,
  manager_id uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE leagues ENABLE ROW LEVEL SECURITY;

-- Create clubs table
CREATE TABLE IF NOT EXISTS clubs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  league_id uuid REFERENCES leagues(id) ON DELETE CASCADE,
  name text NOT NULL,
  logo_url text,
  manager_id uuid REFERENCES users(id) ON DELETE SET NULL,
  founded_year integer,
  stadium text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE clubs ENABLE ROW LEVEL SECURITY;

-- Create players table
CREATE TABLE IF NOT EXISTS players (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  club_id uuid REFERENCES clubs(id) ON DELETE CASCADE,
  name text NOT NULL,
  jersey_number integer NOT NULL,
  position text NOT NULL,
  photo_url text,
  date_of_birth date,
  nationality text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE players ENABLE ROW LEVEL SECURITY;

-- Create matches table
CREATE TABLE IF NOT EXISTS matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  league_id uuid REFERENCES leagues(id) ON DELETE CASCADE,
  home_club_id uuid REFERENCES clubs(id) ON DELETE CASCADE,
  away_club_id uuid REFERENCES clubs(id) ON DELETE CASCADE,
  match_date timestamptz NOT NULL,
  venue text,
  status text NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'completed', 'cancelled')),
  home_score integer DEFAULT 0,
  away_score integer DEFAULT 0,
  video_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Create match_formations table
CREATE TABLE IF NOT EXISTS match_formations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id uuid REFERENCES matches(id) ON DELETE CASCADE,
  club_id uuid REFERENCES clubs(id) ON DELETE CASCADE,
  formation text NOT NULL,
  lineup jsonb NOT NULL DEFAULT '[]',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE match_formations ENABLE ROW LEVEL SECURITY;

-- Create player_statistics table
CREATE TABLE IF NOT EXISTS player_statistics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id uuid REFERENCES players(id) ON DELETE CASCADE,
  match_id uuid REFERENCES matches(id) ON DELETE CASCADE,
  goals integer DEFAULT 0,
  assists integer DEFAULT 0,
  minutes_played integer DEFAULT 0,
  yellow_cards integer DEFAULT 0,
  red_cards integer DEFAULT 0,
  shots integer DEFAULT 0,
  passes integer DEFAULT 0,
  tackles integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE player_statistics ENABLE ROW LEVEL SECURITY;

-- Create news_articles table
CREATE TABLE IF NOT EXISTS news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid REFERENCES users(id) ON DELETE SET NULL,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  featured_image text,
  category text NOT NULL DEFAULT 'news' CHECK (category IN ('news', 'blog', 'match_report')),
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

-- Create news_feed table
CREATE TABLE IF NOT EXISTS news_feed (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('article', 'video', 'match_update', 'external_link')),
  title text NOT NULL,
  description text,
  content_url text,
  thumbnail_url text,
  article_id uuid REFERENCES news_articles(id) ON DELETE CASCADE,
  match_id uuid REFERENCES matches(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news_feed ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can read own profile"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can read all users"
  ON users FOR SELECT
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can manage all users"
  ON users FOR ALL
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

-- RLS Policies for leagues table
CREATE POLICY "Anyone can read leagues"
  ON leagues FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "League managers can update own league"
  ON leagues FOR UPDATE
  TO authenticated
  USING (manager_id = auth.uid());

CREATE POLICY "Admins can manage all leagues"
  ON leagues FOR ALL
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

-- RLS Policies for clubs table
CREATE POLICY "Anyone can read clubs"
  ON clubs FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Club managers can update own club"
  ON clubs FOR UPDATE
  TO authenticated
  USING (manager_id = auth.uid());

CREATE POLICY "League managers can manage clubs in their league"
  ON clubs FOR ALL
  TO authenticated
  USING (
    league_id IN (
      SELECT id FROM leagues WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all clubs"
  ON clubs FOR ALL
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

-- RLS Policies for players table
CREATE POLICY "Anyone can read players"
  ON players FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Club managers can manage players in their club"
  ON players FOR ALL
  TO authenticated
  USING (
    club_id IN (
      SELECT id FROM clubs WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all players"
  ON players FOR ALL
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

-- RLS Policies for matches table
CREATE POLICY "Anyone can read matches"
  ON matches FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "League managers can manage matches in their league"
  ON matches FOR ALL
  TO authenticated
  USING (
    league_id IN (
      SELECT id FROM leagues WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all matches"
  ON matches FOR ALL
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

-- RLS Policies for match_formations table
CREATE POLICY "Anyone can read match formations"
  ON match_formations FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Club managers can manage formations for their club"
  ON match_formations FOR ALL
  TO authenticated
  USING (
    club_id IN (
      SELECT id FROM clubs WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all formations"
  ON match_formations FOR ALL
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

-- RLS Policies for player_statistics table
CREATE POLICY "Anyone can read player statistics"
  ON player_statistics FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authorized users can manage statistics"
  ON player_statistics FOR ALL
  TO authenticated
  USING (
    (SELECT role FROM users WHERE id = auth.uid()) IN ('admin', 'league_manager', 'club_manager')
  );

-- RLS Policies for news_articles table
CREATE POLICY "Anyone can read published articles"
  ON news_articles FOR SELECT
  TO authenticated
  USING (published = true);

CREATE POLICY "Authors can read own articles"
  ON news_articles FOR SELECT
  TO authenticated
  USING (author_id = auth.uid());

CREATE POLICY "Admins can manage all articles"
  ON news_articles FOR ALL
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

-- RLS Policies for news_feed table
CREATE POLICY "Anyone can read news feed"
  ON news_feed FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage news feed"
  ON news_feed FOR ALL
  TO authenticated
  USING ((SELECT role FROM users WHERE id = auth.uid()) = 'admin');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_clubs_league_id ON clubs(league_id);
CREATE INDEX IF NOT EXISTS idx_players_club_id ON players(club_id);
CREATE INDEX IF NOT EXISTS idx_matches_league_id ON matches(league_id);
CREATE INDEX IF NOT EXISTS idx_matches_date ON matches(match_date);
CREATE INDEX IF NOT EXISTS idx_news_articles_published ON news_articles(published, published_at);
CREATE INDEX IF NOT EXISTS idx_news_feed_created_at ON news_feed(created_at DESC);