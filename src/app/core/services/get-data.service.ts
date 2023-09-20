import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }

  searchYouTube(keywords: any): Observable<any> {
    const API_key = Constants.YOUTUBE_API_KEY;
    const url: any =  Constants.YOUTUBE_BASE_URL+"?part=snippet&key="+API_key+"&q="+keywords+"&maxResults=50";
    return this.http.get<any>(url);
  }

  searchStackOverflow(keywords: any): Observable<any> {
    const url: any = Constants.STACKOVERFLOW_BASE_URL+"?order=desc&sort=relevance&q="+keywords+"&site=stackoverflow";
    
    return this.http.get<any>(url);
  }

  searchGitHub(keywords: any): Observable<any> {
    const url: any = Constants.GITHUB_BASE_URL+"?q="+keywords+"&order=desc";
    
    return this.http.get<any>(url);
  }

  searchGoogle(keywords: any): Observable<any> {
    const API_key = Constants.GOOGLE_API_KEY;
    const cx_ID = Constants.GOOGLE_CX_ID;
    const url = Constants.GOOGLE_BASE_URL+"?key="+API_key+"&cx="+cx_ID+"&q="+keywords+""

    return this.http.get<any>(url);
  }

  searchTwitter() {
    let headers = new Headers();

    headers.append('COntent-type','application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })


  }
}
