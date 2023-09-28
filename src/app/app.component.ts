import { Component } from '@angular/core';
import { LoadingHandler } from './core/classes/loading-handler';
import { YouTube } from './shared/interfaces/you-tube';
import { StackOverflow } from './shared/interfaces/stack-overflow';
import { Google } from './shared/interfaces/google';
import { GitHub } from './shared/interfaces/git-hub';
import { YoutubeDataService } from './core/services/youtube-data.service';
import { GithubDataService } from './core/services/github-data.service';
import { StackoverflowDataService } from './core/services/stackoverflow-data.service';
import { GoogleDataService } from './core/services/google-data.service';

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

  constructor(private youtubeDataService: YoutubeDataService,
    private githubDataService: GithubDataService,
    private stackoverflowDataService: StackoverflowDataService,
    private googleDataService: GoogleDataService) { }

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
    this.youtubeDataService.searchYouTube(value).subscribe( (data) => {
      this.LoadingHandler.finish();
      (this.youTubes = data)
    })
  }

  // Search StackOverflow Function
  searchStackOverflow(value: string): void {
    this.stackoverflowDataService.searchStackOverflow(value).subscribe((data) => {
      (this.stackOverflow = data)
    })
  }

  // Search GitHub Function
  searchGitHub(value: string): void {
    this.githubDataService.searchGitHub(value).subscribe((data) => {
      (this.gitHub = data)
    })
  }

  // Search Google Function
  searchGoogle(value: string): void {
    this.googleDataService.searchGoogle(value).subscribe((data) => {
      (this.google = data)
    })
  }

}