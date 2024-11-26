import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterForm} from "../../forms/register.form";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _fb: FormBuilder,
  ) {
    this.registerForm = this._fb.group({...RegisterForm});
  }

  submit(){
    this.registerForm.markAsTouched();

    if(!this.registerForm.valid){
      return;
    }

    this._authService.register(this.registerForm.value).subscribe({
      next: datas => {
        console.log(datas);
        this._router.navigate(['/auth/login']);
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
