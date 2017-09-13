import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStartComponent } from './app-start.component';
import { SignInComponent } from './sign-in.component';
import { InitialNavComponent } from './initial-nav.component';
import { StandardNavComponent } from './standard-nav.component';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AppStartComponent,
    SignInComponent,
    InitialNavComponent,
    StandardNavComponent,
    SignUpComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
