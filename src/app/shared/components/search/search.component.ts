import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue: string = '';
  birthday = new Date(1995, 10, 17);

  @Output() searchPerformed:EventEmitter<string> = new EventEmitter;
  
  performSearch() {
    this.searchPerformed.emit(this.searchValue);
  }

}
