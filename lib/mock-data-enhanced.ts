export const mockPlayersEnhanced = [
  // Lagos Lions
  {
    id: "1",
    club_id: "1",
    name: "Samuel Adeola",
    jersey_number: 10,
    position: "Forward",
    photo_url: undefined,
    date_of_birth: "1995-03-15",
    nationality: "Nigeria",
    stats: {
      goals: 15,
      assists: 8,
      matches: 20,
      minutes: 1800,
      yellow_cards: 2,
      red_cards: 0,
      shots: 45,
      passes: 320,
      tackles: 15,
    },
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
    stats: {
      goals: 5,
      assists: 12,
      matches: 20,
      minutes: 1750,
      yellow_cards: 3,
      red_cards: 0,
      shots: 25,
      passes: 580,
      tackles: 45,
    },
  },
  {
    id: "3",
    club_id: "1",
    name: "Chidi Nwosu",
    jersey_number: 1,
    position: "Goalkeeper",
    photo_url: undefined,
    date_of_birth: "1993-05-10",
    nationality: "Nigeria",
    stats: {
      goals: 0,
      assists: 0,
      matches: 20,
      minutes: 1800,
      yellow_cards: 1,
      red_cards: 0,
      shots: 0,
      passes: 120,
      tackles: 0,
      saves: 65,
      clean_sheets: 8,
    },
  },
  {
    id: "4",
    club_id: "1",
    name: "Tunde Bakare",
    jersey_number: 4,
    position: "Defender",
    photo_url: undefined,
    date_of_birth: "1994-08-20",
    nationality: "Nigeria",
    stats: {
      goals: 2,
      assists: 3,
      matches: 19,
      minutes: 1710,
      yellow_cards: 5,
      red_cards: 0,
      shots: 8,
      passes: 450,
      tackles: 62,
    },
  },
  {
    id: "5",
    club_id: "1",
    name: "Ademola Balogun",
    jersey_number: 5,
    position: "Defender",
    photo_url: undefined,
    date_of_birth: "1996-01-12",
    nationality: "Nigeria",
    stats: {
      goals: 1,
      assists: 2,
      matches: 18,
      minutes: 1620,
      yellow_cards: 4,
      red_cards: 0,
      shots: 5,
      passes: 420,
      tackles: 55,
    },
  },
  {
    id: "6",
    club_id: "1",
    name: "Oluwaseun Adeyemi",
    jersey_number: 8,
    position: "Midfielder",
    photo_url: undefined,
    date_of_birth: "1997-03-25",
    nationality: "Nigeria",
    stats: {
      goals: 4,
      assists: 7,
      matches: 19,
      minutes: 1650,
      yellow_cards: 2,
      red_cards: 0,
      shots: 22,
      passes: 510,
      tackles: 38,
    },
  },
  {
    id: "7",
    club_id: "1",
    name: "Ibrahim Musa",
    jersey_number: 11,
    position: "Forward",
    photo_url: undefined,
    date_of_birth: "1998-06-14",
    nationality: "Nigeria",
    stats: {
      goals: 9,
      assists: 5,
      matches: 18,
      minutes: 1440,
      yellow_cards: 1,
      red_cards: 0,
      shots: 35,
      passes: 280,
      tackles: 12,
    },
  },

  // Nairobi Warriors
  {
    id: "8",
    club_id: "2",
    name: "David Kimani",
    jersey_number: 9,
    position: "Forward",
    photo_url: undefined,
    date_of_birth: "1994-11-08",
    nationality: "Kenya",
    stats: {
      goals: 12,
      assists: 6,
      matches: 19,
      minutes: 1710,
      yellow_cards: 2,
      red_cards: 0,
      shots: 40,
      passes: 295,
      tackles: 18,
    },
  },
  {
    id: "9",
    club_id: "2",
    name: "Joseph Wanjiru",
    jersey_number: 5,
    position: "Defender",
    photo_url: undefined,
    date_of_birth: "1997-02-19",
    nationality: "Kenya",
    stats: {
      goals: 1,
      assists: 1,
      matches: 20,
      minutes: 1800,
      yellow_cards: 6,
      red_cards: 1,
      shots: 4,
      passes: 485,
      tackles: 70,
    },
  },
  {
    id: "10",
    club_id: "2",
    name: "Michael Otieno",
    jersey_number: 1,
    position: "Goalkeeper",
    photo_url: undefined,
    date_of_birth: "1992-09-15",
    nationality: "Kenya",
    stats: {
      goals: 0,
      assists: 0,
      matches: 20,
      minutes: 1800,
      yellow_cards: 0,
      red_cards: 0,
      shots: 0,
      passes: 105,
      tackles: 0,
      saves: 72,
      clean_sheets: 6,
    },
  },
  {
    id: "11",
    club_id: "2",
    name: "Patrick Odhiambo",
    jersey_number: 6,
    position: "Midfielder",
    photo_url: undefined,
    date_of_birth: "1995-07-22",
    nationality: "Kenya",
    stats: {
      goals: 3,
      assists: 9,
      matches: 19,
      minutes: 1665,
      yellow_cards: 3,
      red_cards: 0,
      shots: 18,
      passes: 545,
      tackles: 42,
    },
  },
  {
    id: "12",
    club_id: "2",
    name: "Brian Mutua",
    jersey_number: 10,
    position: "Midfielder",
    photo_url: undefined,
    date_of_birth: "1996-04-18",
    nationality: "Kenya",
    stats: {
      goals: 7,
      assists: 11,
      matches: 20,
      minutes: 1750,
      yellow_cards: 2,
      red_cards: 0,
      shots: 28,
      passes: 620,
      tackles: 35,
    },
  },
];

export const mockFormations = [
  // Match 1: Lagos Lions (4-3-3)
  {
    id: "f1",
    match_id: "1",
    club_id: "1",
    formation: "4-3-3",
    lineup: [
      {
        player_id: "3",
        name: "Chidi Nwosu",
        jersey_number: 1,
        position: "GK",
        x: 50,
        y: 5,
      },
      {
        player_id: "4",
        name: "Tunde Bakare",
        jersey_number: 4,
        position: "LB",
        x: 20,
        y: 20,
      },
      {
        player_id: "5",
        name: "Ademola Balogun",
        jersey_number: 5,
        position: "CB",
        x: 40,
        y: 20,
      },
      {
        player_id: "21",
        name: "Akin Lawal",
        jersey_number: 3,
        position: "CB",
        x: 60,
        y: 20,
      },
      {
        player_id: "22",
        name: "Femi Olatunji",
        jersey_number: 2,
        position: "RB",
        x: 80,
        y: 20,
      },
      {
        player_id: "2",
        name: "Emmanuel Okonkwo",
        jersey_number: 7,
        position: "CM",
        x: 35,
        y: 45,
      },
      {
        player_id: "6",
        name: "Oluwaseun Adeyemi",
        jersey_number: 8,
        position: "CM",
        x: 50,
        y: 50,
      },
      {
        player_id: "23",
        name: "Kunle Ajayi",
        jersey_number: 6,
        position: "CM",
        x: 65,
        y: 45,
      },
      {
        player_id: "7",
        name: "Ibrahim Musa",
        jersey_number: 11,
        position: "LW",
        x: 20,
        y: 75,
      },
      {
        player_id: "1",
        name: "Samuel Adeola",
        jersey_number: 10,
        position: "ST",
        x: 50,
        y: 80,
      },
      {
        player_id: "24",
        name: "Victor Nnamdi",
        jersey_number: 9,
        position: "RW",
        x: 80,
        y: 75,
      },
    ],
  },
  // Match 1: Nairobi Warriors (4-4-2)
  {
    id: "f2",
    match_id: "1",
    club_id: "2",
    formation: "4-4-2",
    lineup: [
      {
        player_id: "10",
        name: "Michael Otieno",
        jersey_number: 1,
        position: "GK",
        x: 50,
        y: 5,
      },
      {
        player_id: "25",
        name: "James Karanja",
        jersey_number: 3,
        position: "LB",
        x: 20,
        y: 20,
      },
      {
        player_id: "9",
        name: "Joseph Wanjiru",
        jersey_number: 5,
        position: "CB",
        x: 40,
        y: 20,
      },
      {
        player_id: "26",
        name: "Dennis Ouma",
        jersey_number: 4,
        position: "CB",
        x: 60,
        y: 20,
      },
      {
        player_id: "27",
        name: "Collins Mwangi",
        jersey_number: 2,
        position: "RB",
        x: 80,
        y: 20,
      },
      {
        player_id: "28",
        name: "Kevin Onyango",
        jersey_number: 7,
        position: "LM",
        x: 20,
        y: 50,
      },
      {
        player_id: "11",
        name: "Patrick Odhiambo",
        jersey_number: 6,
        position: "CM",
        x: 40,
        y: 45,
      },
      {
        player_id: "12",
        name: "Brian Mutua",
        jersey_number: 10,
        position: "CM",
        x: 60,
        y: 45,
      },
      {
        player_id: "29",
        name: "Victor Wafula",
        jersey_number: 11,
        position: "RM",
        x: 80,
        y: 50,
      },
      {
        player_id: "8",
        name: "David Kimani",
        jersey_number: 9,
        position: "ST",
        x: 40,
        y: 75,
      },
      {
        player_id: "30",
        name: "Eric Omondi",
        jersey_number: 14,
        position: "ST",
        x: 60,
        y: 75,
      },
    ],
  },
];

export const mockArticlesDetailed = [
  {
    id: "1",
    author_id: "1",
    author_name: "John Kamau",
    title: "Lagos Lions Secure Victory in Thrilling Match",
    slug: "lagos-lions-victory",
    content: `
## Lagos Lions Triumph Over Nairobi Warriors in Spectacular Fashion

The National Stadium in Lagos witnessed an electrifying encounter on Sunday as the Lagos Lions secured a hard-fought 2-1 victory over the visiting Nairobi Warriors. The match, which drew a capacity crowd of 45,000 spectators, lived up to its billing as one of the season's most anticipated fixtures.

### First Half Drama

The opening 45 minutes saw both teams trading blows in an end-to-end encounter. Lagos Lions' star striker Samuel Adeola opened the scoring in the 23rd minute with a clinical finish, converting a precise through ball from midfielder Emmanuel Okonkwo. The goal sent the home crowd into raptures and set the tone for an entertaining first half.

However, Nairobi Warriors responded with determination, and their persistence paid off just before halftime. David Kimani capitalized on a defensive lapse to level the scores at 1-1, heading home from a pinpoint cross by Brian Mutua.

### Second Half Intensity

The second period began with Lagos Lions pressing high up the pitch, determined to regain their lead. Their efforts were rewarded in the 67th minute when Ibrahim Musa produced a moment of magic, cutting inside from the left wing and unleashing an unstoppable strike into the top corner.

Nairobi Warriors threw everything forward in search of an equalizer, but Lagos Lions' defense, marshaled brilliantly by captain Tunde Bakare, stood firm. Goalkeeper Chidi Nwosu made two crucial saves in the dying minutes to preserve his team's lead.

### Manager's Reaction

Lagos Lions' head coach praised his team's resilience: "This was a complete team performance. We showed great character to come back and secure all three points. Every player gave their maximum, and I'm proud of how we controlled the game in the final third."

### Looking Ahead

The victory propels Lagos Lions to second place in the African Premier League standings, just three points behind league leaders Cairo Eagles. With crucial fixtures ahead, including a derby against Accra Thunder next week, the team's momentum couldn't come at a better time.

The match statistics tell the story of Lagos Lions' dominance, with 58% possession, 15 shots on target, and a passing accuracy of 87%. Samuel Adeola was named Man of the Match for his tireless running and clinical finishing.
    `,
    excerpt:
      "The Lagos Lions defeated Nairobi Warriors 2-1 in an exciting encounter at the National Stadium, with goals from Samuel Adeola and Ibrahim Musa securing all three points.",
    featured_image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "match_report" as const,
    published: true,
    published_at: "2024-03-15T17:00:00Z",
    created_at: "2024-03-15T16:00:00Z",
    updated_at: "2024-03-15T17:00:00Z",
    tags: [
      "Match Report",
      "Lagos Lions",
      "Nairobi Warriors",
      "African Premier League",
    ],
    read_time: "5 min read",
  },
  {
    id: "2",
    author_id: "1",
    author_name: "Sarah Osei",
    title: "Player Transfer News: Samuel Adeola Extends Contract",
    slug: "samuel-adeola-contract",
    content: `
## Star Forward Commits Future to Lagos Lions

In what will come as music to the ears of Lagos Lions supporters, star striker Samuel Adeola has penned a new three-year contract extension, keeping him at the club until 2027. The announcement, made at a press conference on Thursday, ends months of speculation linking the Nigerian international with moves to European clubs.

### A Journey of Success

Since joining Lagos Lions in 2022, Adeola has been nothing short of sensational. With 45 goals in 60 appearances, he has established himself as one of the most feared strikers in African football. His performances have not only helped Lagos Lions compete for major honors but have also earned him a regular spot in the Nigerian national team.

"This club has given me everything," Adeola said at the unveiling. "The fans, my teammates, the coaching staff – everyone has made me feel at home. When the opportunity came to extend my stay, there was no hesitation. We have something special building here, and I want to be part of it."

### Club's Ambition

Lagos Lions' president emphasized the significance of retaining their prized asset: "Samuel is not just a goalscorer; he's a leader, a role model, and an inspiration to young footballers across Africa. His decision to stay demonstrates his belief in our project and our ambition to become the dominant force in African football."

The new contract reportedly makes Adeola one of the highest-paid players in the African Premier League, though exact figures were not disclosed. The deal also includes performance-based bonuses tied to individual and team achievements.

### Statistical Excellence

This season alone, Adeola has scored 15 goals and provided 8 assists in 20 league appearances. His goals-per-game ratio of 0.75 leads the African Premier League, and he's currently the frontrunner for the Golden Boot award. His ability to perform in crucial moments has earned him the nickname "The Decisive One" among fans.

### Looking Forward

With Adeola's future secured, Lagos Lions can now focus on building a team capable of challenging for the African Premier League title and making a strong showing in continental competitions. The club has already announced plans to strengthen the squad in the upcoming transfer window, with several high-profile targets identified.

For Adeola, the goal is clear: "I want to win trophies with this club and continue improving as a player. We have the quality to achieve great things, and I'm excited about what the future holds."
    `,
    excerpt:
      "Star forward Samuel Adeola has signed a new three-year deal with Lagos Lions, committing his future to the African Premier League club until 2027.",
    featured_image:
      "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "news" as const,
    published: true,
    published_at: "2024-03-13T10:00:00Z",
    created_at: "2024-03-13T09:00:00Z",
    updated_at: "2024-03-13T10:00:00Z",
    tags: [
      "Transfer News",
      "Samuel Adeola",
      "Lagos Lions",
      "Contract Extension",
    ],
    read_time: "4 min read",
  },
];
