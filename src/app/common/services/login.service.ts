import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public host: string = environment.apiLoginBaseUrl;

  constructor(private http: HttpClient) { }

  login(credentials):Observable<any> {
    console.log("enter in login from login service component");
    return this.http.post(this.host + "login",
    {
      username: credentials.username,
      password: credentials.password
    },
    httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(this.host + "register", {
      username: user.username,
      password: user.password,
      confirmedPassword: user.password
    }, httpOptions);
  }
}
