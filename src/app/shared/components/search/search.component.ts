import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchValue:string = '';

  @Output() searchPerformed:EventEmitter<string> = new EventEmitter<string>();

  performSearch() {
    this.searchPerformed.emit(this.searchValue);
  }

}
