import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubComponent } from './shared/components/github/github.component';
import { YoutubeComponent } from './shared/components/youtube/youtube.component';
import { GoogleComponent } from './shared/components/google/google.component';
import { StackoverflowComponent } from './shared/components/stackoverflow/stackoverflow.component';
import { TwitterComponent } from './shared/components/twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    YoutubeComponent,
    GoogleComponent,
    StackoverflowComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
