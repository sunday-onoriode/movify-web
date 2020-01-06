import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {LoginRequest} from '../../dto/LoginRequest';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';

declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();

  constructor(private authenticationService: AuthenticationService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  signIn(): void {
    if ($('#form-sign-in').smkValidate()) {
      $('#btn-sign-in').attr('disabled', 'disabled').html('Please wait...');
      this.authenticationService.signIn(this.loginRequest).subscribe(data => {
        if (data.code === 0) {
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('email', data.data.email);
          location.href = '/movies';
        } else {
          toastr.error(data.message);
        }
        $('#btn-sign-in').removeAttr('disabled').html('Submit');
      });
    }
  }

}
