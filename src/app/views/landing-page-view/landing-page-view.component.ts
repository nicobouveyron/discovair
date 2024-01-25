import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SceneComponent } from './scene/scene.component';

@Component({
  selector: 'app-landing-page-view',
  standalone: true,
  imports: [CommonModule, RouterModule, SceneComponent],
  templateUrl: './landing-page-view.component.html',
  styleUrl: './landing-page-view.component.scss',
})
export class LandingPageViewComponent {}
