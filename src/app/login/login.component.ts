import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: User = {
    nome: '',
    senha: '',
  };

  login() {
    this.auth.login(this.usuario);
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
