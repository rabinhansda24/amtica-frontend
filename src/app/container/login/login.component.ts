import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

import { LoginService } from '../../services/login.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private dashboardService: DashboardService, private router: Router, private toastr: ToastrService, private loginService: LoginService , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  login() {
    const user = {
      email: this.f.email.value,
      password: this.f.password.value
    };

    this.loginService.loginUser(user).subscribe(res => {
      if ( res['status'] === 'success' ) {
        const data = res['data'];
        console.log('User: ', res);
        console.log(data.user.name);
        this.dashboardService.setIsLogedIn(1);
        sessionStorage.setItem('token', data.token);
        this.toastr.success('Login success');
        this.router.navigate(['/logs']);
      }

    }, error => {
      this.toastr.error(error);
      console.log(error);
    });
  }

}
