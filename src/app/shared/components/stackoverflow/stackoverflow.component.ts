import { Component, Input, OnInit } from '@angular/core';
import { StackOverflow } from 'src/app/shared/interfaces/stack-overflow';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.scss']
})
export class StackoverflowComponent implements OnInit {

  @Input() searchedValue:StackOverflow[] = [];
  @Input() loader:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
