import { Component, signal } from '@angular/core';

@Component({
  selector: 'pr-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  protected readonly navbarCollapsed = signal(true);

  protected toggleNavbar() {
    this.navbarCollapsed.update(navbar => !navbar);
  }
}
