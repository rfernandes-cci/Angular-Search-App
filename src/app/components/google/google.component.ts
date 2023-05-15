import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

  @Input() searchedValue:any;
  @Input() loader:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
