import { Component, ElementRef, ViewChild } from '@angular/core';
import { Dropdown } from 'flowbite';
import type { DropdownOptions, DropdownInterface } from 'flowbite';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  // set the dropdown menu element
  $targetEl: HTMLElement | null = document.getElementById('dropdownMenu');

  // set the element that trigger the dropdown menu on click
  $triggerEl: HTMLElement | null = document.getElementById('dropdownButton');

  public menuItem: any[] = [
    {
      name: 'Kanban',
      route: '',
      icon: '',
      children: [
        {
          name: '',
          route: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Configuracion',
      route: '',
      icon: '',
    },
  ];

  constructor() {
    // options with default values
    const options: DropdownOptions = {
      placement: 'bottom',
      offsetSkidding: 0,
      offsetDistance: 10,
      onHide: () => {
        console.log('dropdown has been hidden');
      },
      onShow: () => {
        console.log('dropdown has been shown');
      },
    };

    if (this.$targetEl) {
      /*
       * targetEl: required
       * triggerEl: required
       * options: optional
       */
      const dropdown: DropdownInterface = new Dropdown(
        this.$targetEl,
        this.$triggerEl,
        options
      );

      // show the dropdown
      dropdown.show();
    }
  }
}
