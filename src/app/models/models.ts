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

export interface GetTvShow {
    tvShow: TvShowDetail;
}

export interface TvShowDetail extends TvShow {
    url:                  string;
    description:          string;
    description_source:   null;
    runtime:              number;
    youtube_link:         string;
    image_path:           string;
    image_thumbnail_path: string;
    rating:               number;
    rating_count:         number;
    countdown:            null;
    genres:               string[];
    pictures:             any[];
    episodes:             Episode[];
    seasonCount:          number;
}

export interface Episode {
    season:   number;
    episode:  number;
    name:     string;
    air_date: Date;
}

export type TvShowId = TvShow["id"];

export type TvShowIds = Array<TvShowId>;

export type Status = "Canceled/Ended" | "Ended" | "Running" | "New Series" | "To Be Determined";