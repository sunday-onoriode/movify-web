import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {SignUpRequest} from '../../dto/SignUpRequest';
import {Router} from '@angular/router';

declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpRequest: SignUpRequest = new SignUpRequest();

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signUp(): void {
    if ($('#form-sign-up').smkValidate()) {
      $('#btn-sign-up').attr('disabled', 'disabled').html('Please wait...');
      this.authenticationService.signUp(this.signUpRequest).subscribe(data => {
        if (data.code === 0) {
          toastr.success(data.message);
          this.router.navigateByUrl('/sign-in');
        } else {
          toastr.error(data.message);
        }
        $('#btn-sign-up').removeAttr('disabled').html('Submit');
      });
    }

  }

}
