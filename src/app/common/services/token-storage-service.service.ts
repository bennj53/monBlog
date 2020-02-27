import { Injectable } from '@angular/core';
import { User } from '../../models/User.model';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ID = 'id_user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user.userRoles));
    window.sessionStorage.setItem(USER_ID, JSON.stringify(user.identifiant));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public getUserId() {
    return JSON.parse(sessionStorage.getItem(USER_ID));
  }
}
