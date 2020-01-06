import {MovieMiniDTO} from './MovieMiniDTO';

export class MoviesListResponse {
  data: MovieMiniDTO[];
  draw: number;
  length: number;
  recordsTotal: number;
  recordsFilter: number;
}

