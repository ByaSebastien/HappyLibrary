import {Validators} from "@angular/forms";

export const RegisterForm = {
  email: [null,[Validators.required,Validators.email]],
  password: [null,[Validators.required]],
}
