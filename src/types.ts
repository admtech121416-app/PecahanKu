export type Topic =
  | 'Perkalian Pecahan'
  | 'Pembagian Pecahan'
  | 'Pecahan ke Desimal'
  | 'Desimal ke Pecahan'
  | 'Membandingkan Desimal'
  | 'Mengurutkan Desimal'
  | 'Campuran';

export type QuestionType =
  | 'MULTIPLE_CHOICE'
  | 'COMPLEX_CHOICE'
  | 'TRUE_FALSE'
  | 'MATCHING'
  | 'ORDERING'
  | 'ERROR_ANALYSIS';

export type QuestionCategory = 'TKA' | 'PISA' | 'Campuran';
export type QuestionLevel = 'Pemanasan' | 'Tantangan' | 'Ahli';

export interface Question {
  id: string;
  type: QuestionType;
  category: QuestionCategory;
  topic: Topic;
  level: QuestionLevel;
  stimulus?: string; // Text or visual context
  question: string;
  options?: any; // Array of strings or objects depending on type
  correctAnswer: any; // String, Array, or Object
  hint1: string;
  hint2: string;
  hint3: string;
  explanation: {
    diketahui?: string;
    ditanya?: string;
    konsep?: string;
    proses: string;
    kesimpulan: string;
  };
  misconceptionFeedback?: Record<string, string>;
  visualType?: 'fraction-bar' | 'grid' | 'number-line' | 'pizza' | 'none';
}

export interface UserState {
  xp: number;
  streak: number;
  maxStreak: number;
  answeredCorrectly: number;
  totalAnswered: number;
  topicsTried: Record<Topic, boolean>;
  badges: string[];
}

export interface MathPost {
  id: string;
  type: 'fakta' | 'kuis' | 'cerita' | 'tantangan';
  author: string;
  avatar: string;
  content: string;
  visual?: any; // details for rendering visual
  likes: number;
  comments: number;
  tags: string[];
  action?: {
    label: string;
    type: 'kuis' | 'link';
    payload?: any;
  }
}
