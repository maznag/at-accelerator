import { effect, inject, Injectable, signal } from '@angular/core';
import { TvShowId, TvShowIds } from '../models/models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private readonly TV_SHOW_FAVORITE_KEY = "tvShowFavorites";
  private storageService = inject(StorageService<TvShowIds>);
  private favoritesSignal = signal<TvShowIds>(this.storageService.get(this.TV_SHOW_FAVORITE_KEY));
  readonly favorites = this.favoritesSignal.asReadonly();

  constructor() {
    effect(() => this.storageService.set(this.TV_SHOW_FAVORITE_KEY, this.favoritesSignal()));
  }

  toggleFavorites(id: TvShowId) {
    const indexFavorite = this.favoritesSignal().indexOf(id);

    if (indexFavorite !== -1) {
      this.favoritesSignal.update(favorites => {
        favorites.splice(indexFavorite, 1);
        return [...favorites];
      });
    }
    else
      this.favoritesSignal.update(favorites => [...favorites, id]);
  }

}
