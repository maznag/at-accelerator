export interface TvShowResponse {
  total: number;
  page: number;
  pages: number;
  tv_shows: TvShow[];
}
export interface TvShow {
  id: number;
  name: String;
  permalink: String;
  start_date: Date;
  end_date?: Date;
  country: String;
  network: String;
  status: Status;
}

export type TvShowId = TvShow["id"];

export type TvShowIds = Array<TvShowId>;

export type Status = "Canceled/Ended" | "Ended" | "Running" | "New Series" | "To Be Determined";