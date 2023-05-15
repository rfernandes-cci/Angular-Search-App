import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  @Input() searchedValue: any;
  @Input() loader:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
