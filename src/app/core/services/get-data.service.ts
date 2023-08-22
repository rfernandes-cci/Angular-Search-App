import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }

  searchYouTube(keywords: any): Observable<any> {
    const API_key = environment.youTube_API_key;
    const url: any =  environment.youTube_Base_Url+"?part=snippet&key="+API_key+"&q="+keywords+"&maxResults=50";
    return this.http.get<any>(url);
  }

  searchStackOverflow(keywords: any): Observable<any> {
    const url: any = environment.stackOverflow_Base_Url+"?order=desc&sort=relevance&q="+keywords+"&site=stackoverflow";
    
    return this.http.get<any>(url);
  }

  searchGitHub(keywords: any): Observable<any> {
    const url: any = environment.gitHub_Base_Url+"?q="+keywords+"&order=desc";
    
    return this.http.get<any>(url);
  }

  searchGoogle(keywords: any): Observable<any> {
    const API_key = environment.google_API_key;
    const cx_ID = environment.google_Cx_ID;
    const url = environment.google_Base_Url+"?key="+API_key+"&cx="+cx_ID+"&q="+keywords+""

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
