export const mockUsers = [
  {
    id: "1",
    email: "admin@afrigoals.com",
    full_name: "Admin User",
    role: "admin" as const,
    avatar_url: undefined,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "2",
    email: "league@afrigoals.com",
    full_name: "League Manager",
    role: "league_manager" as const,
    avatar_url: undefined,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "3",
    email: "club@afrigoals.com",
    full_name: "Club Manager",
    role: "club_manager" as const,
    avatar_url: undefined,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

export const mockLeagues = [
  {
    id: "1",
    name: "African Premier League",
    description: "Top-tier African football league",
    logo_url: undefined,
    manager_id: "2",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "2",
    name: "East African Championship",
    description: "Regional championship for East Africa",
    logo_url: undefined,
    manager_id: "2",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

export const mockClubs = [
  {
    id: "1",
    league_id: "1",
    name: "Lagos Lions",
    logo_url: undefined,
    manager_id: "3",
    founded_year: 2010,
    stadium: "National Stadium",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "2",
    league_id: "1",
    name: "Nairobi Warriors",
    logo_url: undefined,
    manager_id: "3",
    founded_year: 2012,
    stadium: "Moi Stadium",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "3",
    league_id: "1",
    name: "Cairo Eagles",
    logo_url: undefined,
    manager_id: "3",
    founded_year: 2008,
    stadium: "Cairo International",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "4",
    league_id: "1",
    name: "Accra Thunder",
    logo_url: undefined,
    manager_id: "3",
    founded_year: 2015,
    stadium: "Accra Sports Stadium",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

export const mockPlayers = [
  {
    id: "1",
    club_id: "1",
    name: "Samuel Adeola",
    jersey_number: 10,
    position: "Forward",
    photo_url: undefined,
    date_of_birth: "1995-03-15",
    nationality: "Nigeria",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "2",
    club_id: "1",
    name: "Emmanuel Okonkwo",
    jersey_number: 7,
    position: "Midfielder",
    photo_url: undefined,
    date_of_birth: "1996-07-22",
    nationality: "Nigeria",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "3",
    club_id: "2",
    name: "David Kimani",
    jersey_number: 9,
    position: "Forward",
    photo_url: undefined,
    date_of_birth: "1994-11-08",
    nationality: "Kenya",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "4",
    club_id: "2",
    name: "Joseph Wanjiru",
    jersey_number: 5,
    position: "Defender",
    photo_url: undefined,
    date_of_birth: "1997-02-19",
    nationality: "Kenya",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

export const mockMatches = [
  {
    id: "1",
    league_id: "1",
    home_club_id: "1",
    away_club_id: "2",
    match_date: "2024-03-15T15:00:00Z",
    venue: "National Stadium",
    status: "completed" as const,
    home_score: 2,
    away_score: 1,
    video_url: undefined,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "2",
    league_id: "1",
    home_club_id: "3",
    away_club_id: "4",
    match_date: "2024-03-16T18:00:00Z",
    venue: "Cairo International",
    status: "live" as const,
    home_score: 1,
    away_score: 1,
    video_url: undefined,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "3",
    league_id: "1",
    home_club_id: "1",
    away_club_id: "3",
    match_date: "2024-03-20T15:00:00Z",
    venue: "National Stadium",
    status: "scheduled" as const,
    home_score: 0,
    away_score: 0,
    video_url: undefined,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "4",
    league_id: "1",
    home_club_id: "2",
    away_club_id: "4",
    match_date: "2024-03-21T18:00:00Z",
    venue: "Moi Stadium",
    status: "scheduled" as const,
    home_score: 0,
    away_score: 0,
    video_url: undefined,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

export const mockNewsFeed = [
  {
    id: "1",
    type: "article" as const,
    title: "Lagos Lions Secure Victory in Thrilling Match",
    description:
      "The Lagos Lions defeated Nairobi Warriors 2-1 in an exciting encounter at the National Stadium.",
    content_url: undefined,
    thumbnail_url:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
    article_id: "1",
    match_id: "1",
    created_at: "2024-03-15T17:00:00Z",
    updated_at: "2024-03-15T17:00:00Z",
  },
  {
    id: "2",
    type: "match_update" as const,
    title: "Live: Cairo Eagles vs Accra Thunder - 1-1",
    description:
      "Match currently underway at Cairo International Stadium. Both teams fighting for crucial points.",
    content_url: undefined,
    thumbnail_url:
      "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800",
    article_id: undefined,
    match_id: "2",
    created_at: "2024-03-16T18:30:00Z",
    updated_at: "2024-03-16T18:30:00Z",
  },
  {
    id: "3",
    type: "video" as const,
    title: "Best Goals of the Week - Highlights",
    description:
      "Watch the top 5 goals scored across all matches this week in the African Premier League.",
    content_url: "https://example.com/video",
    thumbnail_url:
      "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    article_id: undefined,
    match_id: undefined,
    created_at: "2024-03-14T12:00:00Z",
    updated_at: "2024-03-14T12:00:00Z",
  },
  {
    id: "4",
    type: "article" as const,
    title: "Player Transfer News: Samuel Adeola Extends Contract",
    description:
      "Star forward Samuel Adeola has signed a new three-year deal with Lagos Lions.",
    content_url: undefined,
    thumbnail_url:
      "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    article_id: "2",
    match_id: undefined,
    created_at: "2024-03-13T10:00:00Z",
    updated_at: "2024-03-13T10:00:00Z",
  },
];

export const mockNewsArticles = [
  {
    id: "1",
    author_id: "1",
    title: "Lagos Lions Secure Victory in Thrilling Match",
    slug: "lagos-lions-victory",
    content: "Full article content here...",
    excerpt:
      "The Lagos Lions defeated Nairobi Warriors 2-1 in an exciting encounter.",
    featured_image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "match_report" as const,
    published: true,
    published_at: "2024-03-15T17:00:00Z",
    created_at: "2024-03-15T16:00:00Z",
    updated_at: "2024-03-15T17:00:00Z",
  },
  {
    id: "2",
    author_id: "1",
    title: "Player Transfer News: Samuel Adeola Extends Contract",
    slug: "samuel-adeola-contract",
    content: "Full article content here...",
    excerpt: "Star forward Samuel Adeola has signed a new three-year deal.",
    featured_image:
      "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "news" as const,
    published: true,
    published_at: "2024-03-13T10:00:00Z",
    created_at: "2024-03-13T09:00:00Z",
    updated_at: "2024-03-13T10:00:00Z",
  },
];

export const mockStorage = {
  uploadVideo: async (file: File, matchId: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`https://storage.afrigoals.com/videos/${matchId}/${file.name}`);
      }, 1500);
    });
  },

  uploadImage: async (file: File, folder: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`https://storage.afrigoals.com/${folder}/${file.name}`);
      }, 1000);
    });
  },

  deleteFile: async (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  },

  getSignedUrl: async (
    path: string,
    expiresIn: number = 3600,
  ): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${path}?signed=true&expires=${Date.now() + expiresIn * 1000}`);
      }, 200);
    });
  },
};

export interface VideoLabelData {
  timestamp: number;
  player_id: string;
  action_type:
    | "goal"
    | "assist"
    | "foul"
    | "yellow_card"
    | "red_card"
    | "shot"
    | "pass"
    | "tackle";
  description?: string;
}

export const mockVideoLabeling = {
  processLabels: async (
    videoUrl: string,
    labels: VideoLabelData[],
  ): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const statistics = labels.reduce((acc: any, label) => {
          if (!acc[label.player_id]) {
            acc[label.player_id] = {
              goals: 0,
              assists: 0,
              shots: 0,
              passes: 0,
              tackles: 0,
              yellow_cards: 0,
              red_cards: 0,
            };
          }

          switch (label.action_type) {
            case "goal":
              acc[label.player_id].goals++;
              break;
            case "assist":
              acc[label.player_id].assists++;
              break;
            case "shot":
              acc[label.player_id].shots++;
              break;
            case "pass":
              acc[label.player_id].passes++;
              break;
            case "tackle":
              acc[label.player_id].tackles++;
              break;
            case "yellow_card":
              acc[label.player_id].yellow_cards++;
              break;
            case "red_card":
              acc[label.player_id].red_cards++;
              break;
          }

          return acc;
        }, {});

        resolve({
          success: true,
          statistics,
          processed_at: new Date().toISOString(),
        });
      }, 2000);
    });
  },

  getVideoAnalytics: async (matchId: string): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          match_id: matchId,
          total_actions: 156,
          heatmap_data: [],
          possession_percentage: { home: 52, away: 48 },
          shots_on_target: { home: 8, away: 5 },
        });
      }, 1500);
    });
  },
};

export const mockExternalAPI = {
  fetchLiveScores: async (): Promise<any[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            match_id: "mock-1",
            home_team: "Team A",
            away_team: "Team B",
            home_score: 2,
            away_score: 1,
            status: "live",
            minute: 67,
          },
        ]);
      }, 1000);
    });
  },

  fetchPlayerRankings: async (leagueId: string): Promise<any[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            player_id: "mock-p1",
            player_name: "John Doe",
            team: "Team A",
            goals: 15,
            assists: 8,
            rank: 1,
          },
          {
            player_id: "mock-p2",
            player_name: "Jane Smith",
            team: "Team B",
            goals: 12,
            assists: 10,
            rank: 2,
          },
        ]);
      }, 1000);
    });
  },

  syncExternalData: async (source: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  },
};
