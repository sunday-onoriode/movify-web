import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ServiceResponse} from '../dto/ServiceResponse';
import {DataTableRequest} from '../dto/DataTableRequest';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static email: string;

  constructor(private http: HttpClient) { }

  public static setEmail(email: string) {
    DataService.email = email;
  }

  public static getEmail(): string {
    return DataService.email;
  }

  public getList(url: string, request: DataTableRequest): Observable<any> {
    if (request == null) {
    } else {
      const page = request.offset; // > 0 ? (request.start / request.length) : request.start;
      url += `?offset=${page}&limit=${request.limit}&`;
      const columns = request.limit;

      if (request.sortField) {
        url += `sortField=${request.sortField}&sortOrder=${request.sortOrder.toUpperCase()}&`;
      }

      if (request.filter) {
        url += `filter=${request.filter}&`;
      }

      // if (request.extra) {
      //   JSON.parse(request.extra).map((obj, index) => {
      //     url += `${obj.name}=${obj.value}&`;
      //   });
      // }
    }

    return this.http.get<ServiceResponse>(url).pipe(map(res => {
      const data: any = res.data;
      if (res.code !== 96) {
        return {
          recordsTotal: data.recordsTotal,
          recordsFiltered: data.recordsFiltered,
          data: data.data,
          draw: data.draw
        };
      } else {
        return {
          recordsTotal: 0,
          recordsFiltered: 0,
          data: []
        };
      }
    }));

  }

}
