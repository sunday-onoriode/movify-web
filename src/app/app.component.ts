import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  email: string;
  url: string;
  loggedIn = false;

  constructor(private dataService: DataService, private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }

  toggleDropdown(): void {
    $('#dropdown-menu').toggle('show');
  }

  signOut(): void {
    localStorage.clear();
    location.href = '/sign-in';
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.url = (['/sign-in', '/sign-up', '/forgot-password'].indexOf(event.url) < 0) ? event.url : 'auth';
    }
    if (event instanceof NavigationEnd) {
    }
    if (event instanceof NavigationCancel) {
    }
    if (event instanceof NavigationError) {
    }
  }
}
