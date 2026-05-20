export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string; // e.g., "35zł" or "35 zł (zupa + drugie danie)"
  category: 'obiady' | 'burgery' | 'dodatki' | 'inne';
  badge?: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  date: string;
  avatarLetter: string;
  rating: number; // 5 stars
  source: 'facebook';
}

export interface OpeningHour {
  dayName: string;
  hours: string;
  isClosed: boolean;
}

export interface GalleryPhoto {
  url: string;
  category: 'all' | 'obiady' | 'burgery' | 'zupy' | 'inne';
  title: string;
}
