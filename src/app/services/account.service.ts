import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http'
import { Loan } from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient) {
  }

  public loginUser(user: User): Observable<any> {
    return this._http.post('http://localhost:8090/user/login', user);
  }
  public registration(user: User): Observable<any> {
    return this._http.post('http://localhost:8090/user/registration', user);
  }
  public applyLoan(loan: Loan): Observable<any> {
    return this._http.post('http://localhost:8091/loan/applyLoans', loan);
  }

}
