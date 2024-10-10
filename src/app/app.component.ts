import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  hoveredIcon: string | null = null;

  setHover(icon: string) {
    this.hoveredIcon = icon;
  }

  clearHover() {
    this.hoveredIcon = null;
  }

  getHoverContent() {
    switch (this.hoveredIcon) {
      case 'home':
        return 'Home';
      case 'about':
        return 'About';
      case 'project':
        return 'Projects';
      case 'team':
        return 'Team';
      case 'services':
        return 'Services';
      case 'contact':
        return 'Contact';
      default:
        return '';
    }
  }
}
