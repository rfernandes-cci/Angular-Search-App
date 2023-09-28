import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Constants from '../constants/constants';
import { StackOverflow } from 'src/app/shared/interfaces/stack-overflow';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowDataService {

  constructor(private http: HttpClient) { }

  searchStackOverflow(keywords: string): Observable<StackOverflow[]> {
    const url: string = Constants.STACKOVERFLOW_BASE_URL+"?order=desc&sort=relevance&q="+keywords+"&site=stackoverflow";
    
    return this.http.get<any>(url).pipe(
      map(response => response.items)
    );
  }
}
