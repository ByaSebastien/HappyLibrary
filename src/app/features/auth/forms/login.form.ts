import {Validators} from "@angular/forms";

export const LoginForm = {
  email: [null,[Validators.required,Validators.email]],
  password: [null,[Validators.required]],
}
