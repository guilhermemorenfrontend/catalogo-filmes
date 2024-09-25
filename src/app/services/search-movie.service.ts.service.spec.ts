import { TestBed } from '@angular/core/testing';

import { SearchMovieServiceTsService } from './search-movie.service.ts.service';

describe('SearchMovieServiceTsService', () => {
  let service: SearchMovieServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMovieServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
