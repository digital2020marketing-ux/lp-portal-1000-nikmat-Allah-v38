export interface MoodOption {
  id: string;
  label: string;
  emoji: string;
  description: string;
  color: string;
}

export interface MuhasabahResponse {
  mood: string;
  ayat: {
    surah: string;
    ayatNumber: string;
    arabicText: string;
    indonesianTranslation: string;
    tafsirBrief?: string;
  };
  renungan: string;
  doa: {
    arabic: string;
    latin: string;
    artinya: string;
  };
  tindakanMuhasabah: string[];
}

export interface ChapterSample {
  id: number;
  title: string;
  category: string;
  duration: string;
  excerpt: string;
  reflectionQuestion: string;
}

export interface NikmatItem {
  category: string;
  icon: string;
  count: number;
  examples: string[];
}

export interface GratitudeEntry {
  id: string;
  date: string;
  blessings: string[];
  note: string;
}
