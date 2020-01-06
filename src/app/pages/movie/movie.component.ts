import { Component, OnInit } from '@angular/core';
import {MovieDTO} from '../../dto/MovieDTO';
import {ActivatedRoute} from '@angular/router';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: MovieDTO = new MovieDTO();

  constructor(private route: ActivatedRoute, public utility: UtilityService) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data['movie'].data;
  }

}
