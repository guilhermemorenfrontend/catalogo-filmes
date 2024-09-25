import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { Search } from '../models/searchMovie.modal';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieServiceTsService {

  constructor(
    private http: HttpClient) { }

  getSearchContent(SearchParams: string): Observable<Search> {
    return this.http.get<Search>(environment.url + SearchParams, {
      headers: {
        "Authorization": environment.__authToken
      }
    })
  }
}
