// my-module.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapSpotsViewComponent } from 'src/app/views/discovair-view/map-spots-view/map-spots-view.component';
import { DrMapModule } from 'dr-map';

const routes: Routes = [
  { path: '', component: MapSpotsViewComponent },
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Utilisez `forChild` pour les modules enfants
    DrMapModule,
  ],
})
export class SpotsModule {}
