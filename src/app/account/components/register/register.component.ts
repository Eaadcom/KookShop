import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../models/account";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      emailInputRegister: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
      passwordInputRegister: ["", [Validators.required, Validators.minLength(8)]],
      passwordConfirmRegister: ["", [Validators.required]],
    });
  }

  passwordsMatchValidator(){
    const formValue = this.registerForm.value;
    return formValue.passwordInputRegister === formValue.passwordConfirmRegister;
  }

  onFormSubmit(): void {

    const formValue = this.registerForm.value;
    let account = new Account(formValue.emailInputRegister, formValue.passwordInputRegister);

    this.authService.register(account).subscribe((response => {
      console.log(response);
    }));
  }

}
