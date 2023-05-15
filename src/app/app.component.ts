import { Component } from '@angular/core';
import { LoadingHandler } from './classes/loading-handler';
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SearchApp';
  youTubes:any;
  stackOverflow:any;
  gitHub:any;
  google:any;

  LoadingHandler = new LoadingHandler();


  constructor(private getDataService: GetDataService) { }


  searchYouTube(value: any): void {
    this.LoadingHandler.start();
    this.getDataService.searchYouTube(value).subscribe( (data) => {
      this.LoadingHandler.finish();
      (this.youTubes = data.items)
    })
  }

  searchStackOverflow(value: any): void {
    this.getDataService.searchStackOverflow(value).subscribe((data) => {
      console.log(data);
     (this.stackOverflow = data.items)
    })
  }

  searchGitHub(value: any): void {
    this.getDataService.searchGitHub(value).subscribe((data) => {
      console.log(data);
      (this.gitHub = data.items)
    })
  }

  searchGoogle(value: any): void {
    this.getDataService.searchGoogle(value).subscribe((data) => {
      console.log(data);
      (this.google = data.items)
    })
  }
}
