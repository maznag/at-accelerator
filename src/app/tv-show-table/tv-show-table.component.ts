import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TvShow } from '../models/models';
import { FavoriteService } from '../services/favorite.service';


@Component({
    selector: 'app-tv-show-table',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './tv-show-table.component.html',
    styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
    @Input({ required: true })
    tvShows!: TvShow[];

    @Input()
    isLoading = false;

    protected favoritesService = inject(FavoriteService);
}
