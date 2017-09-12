import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppStartComponent } from './app-start.component';
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: AppStartComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
