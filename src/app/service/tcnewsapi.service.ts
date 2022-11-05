import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class tcnewsapi {

  constructor(private _http:HttpClient) { }

  topHeadlinesNews="https://newsapi.org/v2/top-headlines?country=us&apiKey=c81465080c2c409a8509bc6e8c04036e";

  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews);
  }
}
