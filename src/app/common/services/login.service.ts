import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../models/User.model';
import { TokenStorageServiceService } from './token-storage-service.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public host: string = environment.apiLoginBaseUrl;
  private isLoggedInfo: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private roles: BehaviorSubject<string []> = new BehaviorSubject<string []>([]);

  constructor(private http: HttpClient, private tokenService: TokenStorageServiceService) {
    this.setIsLoggedInfo();
  }

  getIsLogged(): Observable<boolean> {
    return this.isLoggedInfo.asObservable();
  }

  getRoles(): Observable<string[]> {
    return this.roles.asObservable();
  }

  //voit si user connecté et recup de ses roles
  setIsLoggedInfo(): void {
    if (this.tokenService.getToken() !== null ) {
      this.isLoggedInfo.next(true);
      this.roles.next(this.tokenService.getUser());
      console.log("USER IS LOGGED WITH TOKEN SERVICE : " + this.isLoggedInfo.value);
    } else {
      this.isLoggedInfo.next(false);
      this.roles.next([]);
      console.log("USER IS LOGGED WITH TOKEN SERVICE : " + this.isLoggedInfo.value);
    }
  }

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
