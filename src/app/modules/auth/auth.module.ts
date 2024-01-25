// my-module.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './auth.component';
import { RecoverComponent } from './components/recover/recover.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'signin', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'recover', component: RecoverComponent },
    ],
  },
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Utilisez `forChild` pour les modules enfants
  ],
})
export class AuthModule {}
