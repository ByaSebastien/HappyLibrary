import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterFormModel} from "../models/register.form.model";
import {LoginFormModel} from "../models/login.form.model";
import {environment} from "../../../../environments/environment";
import {UserTokenDtoModel} from "../models/user.token.dto.model";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser$: BehaviorSubject<UserTokenDtoModel|undefined>;

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router
  ) {
    let jsonUser = localStorage.getItem('currentUser');
    if(jsonUser){
      this._currentUser$ = new BehaviorSubject<UserTokenDtoModel|undefined>(JSON.parse(jsonUser));
    }
    else{
      this._currentUser$ = new BehaviorSubject<UserTokenDtoModel|undefined>(undefined);
    }
  }

  register(form: RegisterFormModel): Observable<UserTokenDtoModel> {
    return this._http.post<UserTokenDtoModel>(environment.apiUrl + "/register", form);
  }

  login(form: LoginFormModel): Observable<UserTokenDtoModel> {
    return this._http.post<UserTokenDtoModel>(environment.apiUrl + "/login", form).pipe(
      tap(user => {
        this._currentUser$.next(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
      }),
    );
  }

  logout(){
    this._currentUser$.next(undefined);
    localStorage.removeItem("currentUser");
    this._router.navigate(["/auth/login"]);
  }

  get currentUser(): UserTokenDtoModel | undefined {
    return this._currentUser$.value;
  }

  get currentUser$(): Observable<UserTokenDtoModel|undefined> {
    return this._currentUser$.asObservable();
  }
}
