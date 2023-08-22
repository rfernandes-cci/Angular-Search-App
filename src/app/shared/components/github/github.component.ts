import { Component, Input, OnInit } from '@angular/core';
import { GitHub } from 'src/app/shared/interfaces/git-hub';
import { Loader } from 'src/app/shared/interfaces/loader';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  @Input() searchedValue: GitHub[] = [];
  @Input() loader!: Loader;
  
  constructor() { }

  ngOnInit(): void {
  }

}
