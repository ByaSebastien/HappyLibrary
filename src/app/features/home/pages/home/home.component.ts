import { Component } from '@angular/core';
import {UserTokenDtoModel} from "../../../auth/models/user.token.dto.model";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  currentUser: UserTokenDtoModel | undefined;

  constructor(
    private readonly _authService: AuthService,
  ) {
    this._authService.currentUser$.subscribe({
      next: value => {
        this.currentUser = value;
      }
    })
  }
}
