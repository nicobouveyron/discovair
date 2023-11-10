import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

interface SideMenuItem {
  icon: string;
  link: string[];
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  menu_items: SideMenuItem[] = [
    { icon: 'account_circle', link: ['dashboard'] },
    { icon: 'pin_drop', link: ['spots'] },
    { icon: 'play_arrow', link: ['pulses'] },
    { icon: 'group', link: ['#'] },
    { icon: 'home', link: [''] },
    { icon: 'storefront', link: ['#'] },
  ];
}
