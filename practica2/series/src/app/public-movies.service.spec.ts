import { TestBed } from '@angular/core/testing';

import { PublicMoviesService } from './public-movies.service';

describe('PublicMoviesService', () => {
  let service: PublicMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
