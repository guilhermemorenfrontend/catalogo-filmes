import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Search } from '../../models/searchMovie.modal';
import { SearchMovieServiceTsService } from '../../services/search-movie.service.ts.service';
import { Router } from '@angular/router';
import { CreateArray } from 'src/app/utils/CreatePageArray';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  title = 'desafio';
  searchPage: any
  queryField = new FormControl('');
  max = 10;
  isReadonly = true;
  totalPagesArray: any = []
  currentpage = 1
  totalPages = 0

  constructor(private SearchMovieService: SearchMovieServiceTsService, private router: Router) {
  }
  ngOnInit(): void {
    this.searchPage = this.SearchMovieService.getSearchContent('query=aventura' + '&page=1').subscribe((page: Search) => {
      this.searchPage = page;
      this.totalPages = page.total_pages
      this.renderPagination()
    });

    this.queryField.valueChanges.subscribe(change => {
      this.currentpage = 1;
      this.searchPage = this.SearchMovieService.getSearchContent('query=' + encodeURIComponent(change ? change : 'aventura') + '&language=pt-BR' + '&page=' + this.currentpage).subscribe((page: Search) => {
        this.searchPage = page;
        this.totalPagesArray = []
        this.totalPages = page.total_pages
        this.renderPagination()
      });
    });
  }

  OnSelected(id: number) {
    this.router.navigate(['/movie', id])
  }

  renderPagination() {
    if (this.totalPages > this.currentpage + 10) {
      if (this.currentpage > 2) {
        this.totalPagesArray = CreateArray(this.currentpage < 10 ? 1 : this.currentpage - 5, this.currentpage + 10)
      } else {
        this.totalPagesArray = CreateArray(1, this.currentpage + 10)
      }
    } else {
      this.totalPagesArray = CreateArray(this.currentpage, this.totalPages)
    }
  }
  SetCurrentPage(page: number) {
    this.currentpage = page
    this.searchPage = this.SearchMovieService.getSearchContent('query=' + encodeURIComponent(this.queryField.value ? this.queryField.value == '' ? 'aventura' : this.queryField.value : 'aventura') + '&language=pt-BR' + '&page=' + this.currentpage).subscribe((page: Search) => {
      this.searchPage = page;
    });
    this.renderPagination()
  }
}

