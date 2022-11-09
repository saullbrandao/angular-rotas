import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rotas';

  showMenu: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.showMenuEmitter.subscribe((show) => (this.showMenu = show));
  }
}
