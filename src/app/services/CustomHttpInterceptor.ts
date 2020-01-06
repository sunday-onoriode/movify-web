import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {tap} from 'rxjs/operators';

declare var toastr: any;
declare var $: any;

export class CustomHttpInterceptor implements CustomHttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        /* exclude auth */
        if (!req.url.split('/').includes('internal')) {
            return next.handle(req);
        }

        const newReq = req.clone({
            headers: req.headers.set('Authorization', localStorage.token)
        });

        return next.handle(newReq).pipe(tap(data => {

        }, (err: HttpErrorResponse) => {
          console.log(err.message);
        }));
    }

}
