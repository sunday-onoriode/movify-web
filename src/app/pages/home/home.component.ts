import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {DataTableRequest} from '../../dto/DataTableRequest';
import {MoviesListResponse} from '../../dto/MoviesListResponse';
import {SortProperty} from '../../dto/SortProperty';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataRequest: DataTableRequest = new DataTableRequest(9, 0, 'id', 'DESC');

  moviesData: MoviesListResponse = new MoviesListResponse();

  constructor(private movieService: MovieService, public utils: UtilityService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.utils.showLoading();
    this.movieService.getList(this.dataRequest).subscribe(data => {
      this.moviesData = data;
      this.utils.hideLoading();
    });
  }

  search(): void {
    this.getMovies();
  }

  sort(field: string): void {
    if (field === 'title_') {
      this.dataRequest.sortField = 'title';
      this.dataRequest.sortOrder = 'ASC';
    } else {
      this.dataRequest.sortField = field;
      this.dataRequest.sortOrder = 'DESC';
    }
    this.getMovies();
  }

  paginate(direction: string): void {
    this.dataRequest.offset = (direction === 'next') ? this.dataRequest.offset + this.dataRequest.limit : this.dataRequest.offset - this.dataRequest.limit;
    this.getMovies();
  }

  substr(str: string, limit: number): string {
    let output = '';
    if (str.length > limit) {
      output = str.substr(0, limit);
    }
    return output + '...';
  }

}

