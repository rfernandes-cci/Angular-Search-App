import { Component, Input, OnInit } from '@angular/core';
import { YouTube } from 'src/app/shared/interfaces/you-tube';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  @Input() searchedValue:YouTube[] = [];
  @Input() loader:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
