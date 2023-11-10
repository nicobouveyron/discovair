import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page-view.component.html',
  styleUrl: './landing-page-view.component.scss',
})
export class LandingPageViewComponent {}
