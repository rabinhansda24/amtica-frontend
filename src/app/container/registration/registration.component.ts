import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  constructor(private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.userForm.controls; }
  registerUser() {
    console.log('register click');
    const user = {
      name: this.f.name.value,
      email: this.f.email.value,
      password: this.f.password.value
    }
    this.registrationService.registration(user).subscribe(res => {
      console.log(typeof (res), res);
      if(res['status'] === 'success') {
        this.toastr.success('User created successfully');
        this.router.navigate(['/login']);
      }
    }, error => {
      this.toastr.error(error);
      console.log(error);
    });
  }




}
