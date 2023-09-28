import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwitterDataService {

  constructor(private http: HttpClient) { }

    searchTwitter() {
    let headers = new Headers();

    headers.append('COntent-type','application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })


  }
}
