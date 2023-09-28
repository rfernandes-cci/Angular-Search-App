import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Constants from '../constants/constants';
import { GitHub } from 'src/app/shared/interfaces/git-hub';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor(private http: HttpClient) { }

  searchGitHub(keywords: string): Observable<GitHub[]> {
    const url: any = Constants.GITHUB_BASE_URL+"?q="+keywords+"&order=desc";
    
    return this.http.get<any>(url).pipe(
      map(response => response.items)
    );
  }
}
