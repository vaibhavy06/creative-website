export interface KittenPhoto {
  id: number;
  url: string;
  caption: string;
  category: 'sleepy' | 'white' | 'orange' | 'bows' | 'flowers' | 'teddy' | 'blanket' | 'funny' | 'box' | 'portrait';
  categoryLabel: string;
  sweetNote: string;
}

export interface LoveLetter {
  id: number;
  title: string;
  sealColor: string;
  envelopeBg: string;
  icon: string;
  content: string[];
  signoff: string;
}

export interface GiftItem {
  id: number;
  title: string;
  boxColor: string;
  ribbonColor: string;
  icon: string;
  unlockedTitle: string;
  message: string;
  type: 'hug' | 'kisses' | 'chocolates' | 'compliments' | 'mirror' | 'secret';
}

export interface ReasonItem {
  id: number;
  reason: string;
  emoji: string;
}

export interface SecretMessageItem {
  id: number;
  hint: string;
  location: string;
  message: string;
  icon: string;
}

export interface ScrapbookPhoto {
  id: number;
  title: string;
  url: string;
  date: string;
  caption: string;
  rotation: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  reaction: string;
}

