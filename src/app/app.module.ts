import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
