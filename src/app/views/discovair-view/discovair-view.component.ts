import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-discovair-view',
  standalone: true,
  templateUrl: './discovair-view.component.html',
  styleUrl: './discovair-view.component.scss',
  imports: [CommonModule, RouterModule, SideMenuComponent],
})
export class DiscovairViewComponent {
  nav_is_open = false;
}
