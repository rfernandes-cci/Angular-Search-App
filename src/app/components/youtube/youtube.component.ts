import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  @Input() searchedValue:any
  @Input() loader:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
