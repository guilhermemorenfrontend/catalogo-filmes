import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetMovieDetailsService {

  constructor(private http: HttpClient) {

  }

  getMovieDetails(movieId: number) {
    return this.http.get(environment.MovieDetailsURL + movieId + '?language=pt-br', {
      headers: {
        "Authorization": environment.__authToken
      }
    });
  }
}
