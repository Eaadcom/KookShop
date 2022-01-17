import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Account} from "../../models/account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailInputLogin: ["", [Validators.required]],
      passwordInputLogin: ["", [Validators.required]],
    });
  }

  onFormSubmit(){

    const formValue = this.loginForm.value;
    let account = new Account(formValue.emailInputLogin, formValue.passwordInputLogin)

    this.authService.login(account).subscribe((response => {
      console.log(response)
    }));
  }

}
