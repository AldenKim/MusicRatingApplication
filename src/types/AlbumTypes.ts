export interface Album {
  name: string;
  image: string;
}

export interface RankedAlbum extends Album {
  ranking: number;
  notes: string;
}
