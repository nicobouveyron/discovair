import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrMapModule } from 'dr-map';

@Component({
  selector: 'app-map-spots-view',
  standalone: true,
  templateUrl: './map-spots-view.component.html',
  styleUrl: './map-spots-view.component.scss',
  imports: [CommonModule, DrMapModule],
})
export class MapSpotsViewComponent {
  // nav_is_open = false;
}
