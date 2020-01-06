import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {ServiceResponse} from '../dto/ServiceResponse';
import {Observable} from 'rxjs';
import {MovieService} from './movie.service';

@Injectable()
export class MovieResolver implements Resolve<Observable<ServiceResponse>> {
  constructor(private movieService: MovieService) {}
  public resolve(route: ActivatedRouteSnapshot): Observable<ServiceResponse> {
    const slug = route.paramMap.get('slug');
    return this.movieService.findBySlug(slug);
  }
}

