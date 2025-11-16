import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'my-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  navButtons = signal([
    {
      text: "About",
      route: '',
    },
    {
      text: "Projects",
      route: '',
      onClick: this.Scroll
    },
    {
      text: "Adventures",
      route: 'adventures',
    },
  ])
  public Scroll(){
    const projectsSection = document.getElementById("Projects");
    if(!projectsSection) return;
    const headerOffset = 80;
    const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
