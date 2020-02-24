import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';
import { User } from '../../models/User.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public host: string = environment.apiLoginBaseUrl;

  constructor(private http: HttpClient) { }

  /*login(username:string, password:string ) {
    const response =  this.http.post<User>(this.host + "login", {username, password}, httpOptions);
    console.log(" RESPONSE : " + response);
    return response;
  }*/
  login(credentials):Observable<any> {
    console.log("enter in login from login service component");
    console.log("username: " + credentials.identifiant + " --- password: " + credentials.password);
    const response =  this.http.post(this.host + "login",
    {
      username: credentials.identifiant,
      password: credentials.password
    },
    httpOptions);

    console.log("Response : " + response);
    return response;
  }

  register(user): Observable<any> {
    return this.http.post(this.host + "register", {
      username: user.identifiant,
      password: user.password,
      confirmedPassword: user.password
    }, httpOptions);
  }
}
