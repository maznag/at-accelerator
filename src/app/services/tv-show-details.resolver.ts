import { inject } from '@angular/core';
import { TvShowDetail } from '../models/models';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TvShowDetailsService } from './tv-show-details.service';

export function tvShowDetailsResolve(route: ActivatedRouteSnapshot): Observable<TvShowDetail> {
  const id = Number(route.paramMap.get("id"));
  return inject(TvShowDetailsService).getDetails(id);
}