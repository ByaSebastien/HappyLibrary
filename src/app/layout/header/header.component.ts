import { Component } from '@angular/core';
import {Link} from "../../core/models/link";
import {UserTokenDtoModel} from "../../features/auth/models/user.token.dto.model";
import {AuthService} from "../../features/auth/services/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private anonymousNav : Link[] =[
    { title: 'Home', url: '/'},
    { title: 'Book', url: '/book'},
    { title: 'Register', url: '/auth/register'},
    { title: 'Login', url: '/auth/login'},
  ];

  private authenticatedNav : Link[] =[
    { title: 'Home', url: '/'},
    { title: 'Book', url: '/book'},
    { title: 'Logout', action: () => this.logout()},
  ];

  currentUser: UserTokenDtoModel | undefined;

  links: Link[] = []

  constructor(
    private readonly _authService: AuthService,
  ) {
    _authService.currentUser$.subscribe({
      next: data => {
        this.currentUser = data;
        this.links = this.currentUser ? this.authenticatedNav : this.anonymousNav;
      }
    });
  }

  logout(){
    this._authService.logout();
  }
}
