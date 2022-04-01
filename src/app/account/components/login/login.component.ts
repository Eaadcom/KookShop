import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Account} from "../../models/account";
import {catchError, map, of} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  badlogin: boolean = false;
  loginForm!: FormGroup;
  loggedIn: boolean = false;
  receivedLoginResponse: boolean = false;
  @Output() loginEmitter = new EventEmitter<any>();

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

    this.authService.login(account).pipe(
      map( response => {
        this.receivedLoginResponse = true
        if (typeof response.token === "string") {
          this.changeLoginState();
          localStorage.setItem('JWT', response.token);
        }
      }), catchError(err => of(401))
    ).subscribe(x => {
      if(x == 401) {
        this.badlogin = true;
      }
    })

  }

  changeLoginState(){
    this.loggedIn = !this.loggedIn;
    this.loginEmitter.emit(this.loggedIn);
  }
}
