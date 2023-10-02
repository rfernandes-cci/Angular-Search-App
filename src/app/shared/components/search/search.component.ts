import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue: string = '';
  birthday = new Date(1995, 10, 17);
  searchValueFromQueryParams: string = '';

  @Output() searchPerformed:EventEmitter<string> = new EventEmitter;

  constructor(private route: ActivatedRoute) {
    const encodedSearchValue = this.route.snapshot.queryParamMap.get('q') || '';
    this.searchValue = decodeURIComponent(encodedSearchValue);
   }
  
  performSearch() {
    this.searchPerformed.emit(this.searchValue);
  }

}
