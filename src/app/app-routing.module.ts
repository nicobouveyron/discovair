import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';
import { DiscovairViewComponent } from './views/discovair-view/discovair-view.component';

const routes: Routes = [
  { path: '', component: LandingPageViewComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'app',
    component: DiscovairViewComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'pulses',
        loadChildren: () =>
          import('./modules/pulses/pulses.module').then((m) => m.PulsesModule),
      },
      {
        path: 'spots',
        loadChildren: () =>
          import('./modules/spots/spots.module').then((m) => m.SpotsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
