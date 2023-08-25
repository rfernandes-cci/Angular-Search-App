import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './components/github/github.component';
import { GoogleComponent } from './components/google/google.component';
import { SearchComponent } from './components/search/search.component';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GithubComponent,
    GoogleComponent,
    SearchComponent,
    StackoverflowComponent,
    TwitterComponent,
    YoutubeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GithubComponent,
    GoogleComponent,
    SearchComponent,
    StackoverflowComponent,
    TwitterComponent,
    YoutubeComponent
  ]
})
export class SharedModule { }
