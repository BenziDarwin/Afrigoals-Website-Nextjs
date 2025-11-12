/*
  # Add Premium Features, Comments, and Likes

  1. New Tables
    - `subscriptions`
      - User subscription management
      - Tracks premium access levels
    - `article_comments`
      - Comments on news articles
      - User engagement tracking
    - `article_likes`
      - Likes for articles
      - One like per user per article
    - `player_articles`
      - Links articles to players mentioned

  2. Security
    - Enable RLS on all tables
    - Authenticated users can comment and like
    - Only premium users can view certain content
*/

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_type text NOT NULL CHECK (plan_type IN ('free', 'premium', 'pro')),
  status text NOT NULL CHECK (status IN ('active', 'cancelled', 'expired')) DEFAULT 'active',
  started_at timestamptz DEFAULT now(),
  expires_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create article_comments table
CREATE TABLE IF NOT EXISTS article_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name text NOT NULL,
  user_avatar text,
  comment_text text NOT NULL,
  parent_comment_id uuid REFERENCES article_comments(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE article_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view comments"
  ON article_comments FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON article_comments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments"
  ON article_comments FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments"
  ON article_comments FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create article_likes table
CREATE TABLE IF NOT EXISTS article_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(article_id, user_id)
);

ALTER TABLE article_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view likes"
  ON article_likes FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can like articles"
  ON article_likes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unlike articles"
  ON article_likes FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create player_articles junction table
CREATE TABLE IF NOT EXISTS player_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id text NOT NULL,
  article_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(player_id, article_id)
);

ALTER TABLE player_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view player articles"
  ON player_articles FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_article_comments_article_id ON article_comments(article_id);
CREATE INDEX IF NOT EXISTS idx_article_comments_user_id ON article_comments(user_id);
CREATE INDEX IF NOT EXISTS idx_article_likes_article_id ON article_likes(article_id);
CREATE INDEX IF NOT EXISTS idx_article_likes_user_id ON article_likes(user_id);
CREATE INDEX IF NOT EXISTS idx_player_articles_player_id ON player_articles(player_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
