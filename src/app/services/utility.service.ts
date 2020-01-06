import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public listArrayValues(arr: string[]): string {
    let output = '';
    arr.forEach(d => {
      output += d + ', ';
    });
    return output.substr(0, output.length - 2);
  }

  /* Loader */
  showLoading(): void {
    $('#loader').show();
  }

  hideLoading(): void {
    $('#loader').fadeOut(500);
  }
  /* Loader */

}
