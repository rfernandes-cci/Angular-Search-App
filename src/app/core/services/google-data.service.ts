import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Constants from '../constants/constants';
import { Google } from 'src/app/shared/interfaces/google';

@Injectable({
  providedIn: 'root'
})
export class GoogleDataService {

  constructor(private http: HttpClient) { }

  searchGoogle(keywords: string): Observable<Google[]> {
    const API_key = Constants.GOOGLE_API_KEY;
    const cx_ID = Constants.GOOGLE_CX_ID;
    const url = Constants.GOOGLE_BASE_URL+"?key="+API_key+"&cx="+cx_ID+"&q="+keywords+""

    return this.http.get<any>(url).pipe(
      map(response => response.items)
    );
  }
}
