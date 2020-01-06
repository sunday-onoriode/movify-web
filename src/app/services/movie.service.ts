import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SignUpRequest} from '../dto/SignUpRequest';
import {SignUpServiceResponse} from '../dto/SignUpServiceResponse';
import {LoginRequest} from '../dto/LoginRequest';
import {LoginServiceResponse} from '../dto/LoginServiceResponse';
import {DataService} from './data.service';
import {DataTableRequest} from '../dto/DataTableRequest';
import {MoviesListResponse} from '../dto/MoviesListResponse';
import {ServiceResponse} from '../dto/ServiceResponse';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = environment.baseUrl + 'api/v1/internal/movies';

  constructor(private http: HttpClient, private dataService: DataService) { }

  public getList(req: DataTableRequest) {
    return this.dataService.getList(this.baseUrl, req);
  }

  public findBySlug(slug: string) {
    return this.http.get<ServiceResponse>(this.baseUrl + '/slug/' + slug);
  }


}
