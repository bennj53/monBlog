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
export class UserService {

  public host: string = environment.apiLoginBaseUrl;

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(this.host + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.host + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.host + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.host + 'admin', { responseType: 'text' });
  }
}
