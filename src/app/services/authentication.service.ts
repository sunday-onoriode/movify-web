import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../dto/LoginRequest';
import {LoginServiceResponse} from '../dto/LoginServiceResponse';
import {SignUpRequest} from '../dto/SignUpRequest';
import {SignUpServiceResponse} from '../dto/SignUpServiceResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl: string = environment.baseUrl + 'api/v1/auth';

  constructor(private http: HttpClient) { }

  public signUp(data: SignUpRequest) {
    return this.http.post<SignUpServiceResponse>(this.baseUrl + '/register', data);
  }

  public signIn(data: LoginRequest) {
    return this.http.post<LoginServiceResponse>(this.baseUrl + '/login', data);
  }


}
