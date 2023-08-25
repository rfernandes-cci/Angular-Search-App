import { Component } from '@angular/core';
import { LoadingHandler } from './core/classes/loading-handler';
import { YouTube } from './shared/interfaces/you-tube';
import { StackOverflow } from './shared/interfaces/stack-overflow';
import { Google } from './shared/interfaces/google';
import { GitHub } from './shared/interfaces/git-hub';
import { GetDataService } from './core/services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  youTubes: YouTube[] = [];
  stackOverflow: StackOverflow[] = [];
  gitHub: GitHub[] = [];
  google: Google[] =[];

  LoadingHandler = new LoadingHandler();

  constructor(private getDataService: GetDataService) { }

  // Performs Search On Each Platform
  performSearch(searchValue: string) {
    this.searchYouTube(searchValue);
    this.searchStackOverflow(searchValue);
    this.searchGitHub(searchValue);
    this.searchGoogle(searchValue);  
  }

  // Search YouTube Function
  searchYouTube(value: string): void {
    this.LoadingHandler.start();
    this.getDataService.searchYouTube(value).subscribe( (data) => {
      this.LoadingHandler.finish();
      (this.youTubes = data.items)
    })
  }

  // Search StackOverflow Function
  searchStackOverflow(value: string): void {
    this.getDataService.searchStackOverflow(value).subscribe((data) => {
      (this.stackOverflow = data.items)
    })
  }

  // Search GitHub Function
  searchGitHub(value: string): void {
    this.getDataService.searchGitHub(value).subscribe((data) => {
      (this.gitHub = data.items)
    })
  }

  // Search Google Function
  searchGoogle(value: string): void {
    this.getDataService.searchGoogle(value).subscribe((data) => {
      (this.google = data.items)
    })
  }

}