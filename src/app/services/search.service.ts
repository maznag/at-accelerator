import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { EPISODATE_SEARCH_API } from '../app.constantes';
import { TvShow, TvShowResponse } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searching = signal(false);
  readonly isSearching = this.searching.asReadonly();
  private tvShows = signal<TvShow[]>([]);

  constructor(private httpClient: HttpClient) { }

  search(term = ""): Signal<TvShow[]> {
    this.tvShows.set([]);
    this.searching.set(true);
    this.httpClient.get<TvShowResponse>(this.buildSearchUrl(term)).subscribe(response => {
      this.tvShows.set(response.tv_shows);
      this.searching.set(false);
    });
    return this.tvShows.asReadonly();
  }

  private buildSearchUrl(term: string): string {
    let searchUrl = EPISODATE_SEARCH_API + '?page=1';
    if (term?.length > 0) {
      searchUrl = searchUrl + '&q=' + term;
    }
    return searchUrl;
  }
}
