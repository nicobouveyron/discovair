import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PulsesViewComponent } from 'src/app/views/discovair-view/pulses-view/pulses-view.component';

const routes: Routes = [
  { path: '', component: PulsesViewComponent },
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Utilisez `forChild` pour les modules enfants
  ],
})
export class PulsesModule {}
