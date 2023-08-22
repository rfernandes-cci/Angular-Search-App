import { Component, Input, OnInit } from '@angular/core';
import { Google } from 'src/app/shared/interfaces/google';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

  @Input() searchedValue: Google[] =[];
  @Input() loader:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
