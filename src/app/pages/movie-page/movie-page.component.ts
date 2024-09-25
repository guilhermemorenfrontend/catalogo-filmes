import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMovieDetailsService } from 'src/app/services/get-movie-details.service';
import { SearchMovieServiceTsService } from 'src/app/services/search-movie.service.ts.service';
import { Movie } from '../../models/movie.model';
import { GendersModel } from '../../models/genders.model';
import { Production } from '../../models/ProductionCompanies.model';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  movieid = 0
  ComponentPage: Movie = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: "",
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    genres: [],
    production_companies: []
  }
  constructor(private route: ActivatedRoute, private GetMovieDetails: GetMovieDetailsService) {

  }
  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.movieid = parseInt(id);
    }

    this.GetMovieDetails.getMovieDetails(this.movieid).subscribe((mov: any) => {
      this.ComponentPage = mov;
    })
  }

  ParseDate(dateString: string) {
    const date = new Date(dateString)
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  }
  ParseGenders(genders: GendersModel[]) {
    const newArr = genders.map(gender => gender.name)

    return newArr.toLocaleString()
  }
  ParseCompany(companies: Production[]) {
    const newArr = companies.map(company => company.name)

    return newArr.toLocaleString()
  }
}
