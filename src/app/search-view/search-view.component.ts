import { Component, inject, Signal } from '@angular/core';

import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { SearchService } from '../services/search.service';
import { TvShow } from '../models/models';

@Component({
    selector: 'app-search-view',
    standalone: true,
    imports: [TvShowTableComponent],
    templateUrl: './search-view.component.html',
    styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {

    private searchService = inject(SearchService);
    protected data!: Signal<TvShow[]>;

    constructor() {
        this.search();
    }

    search(term = "", event?: Event) {
        event?.preventDefault();
        this.data = this.searchService.search(term);
    }

    isSearching() {
        return this.searchService.isSearching();
    }

}
