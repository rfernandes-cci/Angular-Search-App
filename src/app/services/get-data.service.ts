import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }

  searchYouTube(keywords: any): Observable<any> {
    const API_key = "AIzaSyCTq-A9upHJ-MzPTNn2aTcU8vNDUgzv8Ek";
    const url: any =  "https://www.googleapis.com/youtube/v3/search?part=snippet&key="+API_key+"&q="+keywords+"&maxResults=50";
    return this.http.get<any>(url);
  }

  searchStackOverflow(keywords: any): Observable<any> {
    const url: any = "https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q="+keywords+"&site=stackoverflow";
    
    return this.http.get<any>(url);
  }

  searchGitHub(keywords: any): Observable<any> {
    const url: any = "https://api.github.com/search/repositories?q="+keywords+"&order=desc";
    
    return this.http.get<any>(url);
  }

  searchGoogle(keywords: any): Observable<any> {
    const API_key = "AIzaSyD29GeMf6lc8xAvZyRzfAMK7do_VjoDKgQ";
    const cx_ID = "10763f52e12cd47de"
    const url = "https://www.googleapis.com/customsearch/v1?key="+API_key+"&cx="+cx_ID+"&q="+keywords+""

    return this.http.get<any>(url);
  }
}
