import { Component, HostListener } from '@angular/core';
import { components } from '../components';
import { SidebarService } from 'src/app/core/services';

@Component({
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss'],
})
export class LayoutPageComponent {
  components = components;

  constructor(public sidebarService: SidebarService) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    const isMobile = window.innerWidth < 768; // Adjust the threshold as per your needs
    this.sidebarService.setCollapsed(isMobile);
  }
}
