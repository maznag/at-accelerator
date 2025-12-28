import { Injectable } from '@angular/core';
import { GetTvShow, TvShowDetail } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { EPISODATE_DETAIL_API } from '../app.constantes';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvShowDetailsService {

  constructor(private httpClient: HttpClient) { }

  getDetails(id: Number): Observable<TvShowDetail> {
    return this.httpClient.get<GetTvShow>(`${EPISODATE_DETAIL_API}?q=${id}`).pipe(map(response => {
      response.tvShow.seasonCount = response.tvShow.episodes.at(-1)!.season;
      return response.tvShow;    
    }));
  }
  
}
