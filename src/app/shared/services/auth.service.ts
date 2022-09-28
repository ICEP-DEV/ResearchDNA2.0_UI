import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, BehaviorSubject} from 'rxjs';
import {first, catchError, tap} from 'rxjs/operators';
import {ErrorHandlerService} from "./error-handler.service";
import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3010/api";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<User, "studNumber">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  signup(user: Omit<User, "studNumber">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("/signup"))
      );
  }

  login(
  userId: Pick<User, 'studNumber'>,
    password: Pick<User, 'password'>
  ): Observable<any> {
    return this.http
      .post<any>(
        `${this.url}/login`,
        { userId, password },
        this.httpOptions
      )
      .pipe(
        first(),
        tap((tokenObject: any) => {
          this.userId = tokenObject.userId;
          localStorage.setItem('token', tokenObject.token);
          this.isUserLoggedIn$.next(true);

        }),
        catchError(this.errorHandlerService.handleError<any>('login'))
      );
  }

}
