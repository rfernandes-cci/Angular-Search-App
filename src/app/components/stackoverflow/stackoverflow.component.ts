import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.scss']
})
export class StackoverflowComponent implements OnInit {

  @Input() searchedValue:any
  @Input() loader:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
