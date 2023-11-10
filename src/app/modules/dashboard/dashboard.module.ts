// my-module.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from 'src/app/views/discovair-view/dashboard-view/dashboard-view.component';

const routes: Routes = [
  { path: '', component: DashboardViewComponent },
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Utilisez `forChild` pour les modules enfants
  ],
})
export class DashboardModule {}
