export interface Stat {
    name: string;
    value: number;
  }
  export interface ItemDetails {
    name?: string;
    id?: number;
    types?: string[];
    powers?: Stat[];
    abilities?: string[];
    experience?: number | string;
    imageUrl?: string;
  }