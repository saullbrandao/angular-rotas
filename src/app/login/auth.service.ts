import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  login(user: User) {
    if (user.nome === 'a@a' && user.senha === '123') {
      this.isAuthenticated = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/']);
    } else {
      this.isAuthenticated = false;
      this.showMenuEmitter.emit(false);
    }
  }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }
}
