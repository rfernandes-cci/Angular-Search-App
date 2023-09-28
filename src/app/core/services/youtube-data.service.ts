import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Constants from '../constants/constants';
import { YouTube } from 'src/app/shared/interfaces/you-tube';
import { YouTubeApiResponse } from 'src/app/shared/interfaces/you-tube-api-response';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  constructor(private http: HttpClient) { }

  searchYouTube(keywords: string): Observable<YouTube[]> {
    const API_key = Constants.YOUTUBE_API_KEY;
    const url: string =  Constants.YOUTUBE_BASE_URL+"?part=snippet&key="+API_key+"&q="+keywords+"&maxResults=50";
    return this.http.get<YouTubeApiResponse>(url).pipe(
      map(response => response.items)
    );
  }
  
}
