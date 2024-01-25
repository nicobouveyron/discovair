import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-discovair-view',
  standalone: true,
  templateUrl: './discovair-view.component.html',
  styleUrl: './discovair-view.component.scss',
  imports: [CommonModule, RouterModule, HeaderComponent],
})
export class DiscovairViewComponent {
  nav_is_open = false;
}
