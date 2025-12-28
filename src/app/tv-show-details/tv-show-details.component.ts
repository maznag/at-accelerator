import { Component, computed, Input } from '@angular/core';
import { TvShowDetail } from '../models/models';
import { DatePipe, DecimalPipe, I18nPluralPipe } from '@angular/common';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [DatePipe, DecimalPipe, I18nPluralPipe],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css',
})
export default class TvShowDetailsComponent {

  @Input()
  tvShow!: TvShowDetail;  

  back() {
    history.back();
  }
}
