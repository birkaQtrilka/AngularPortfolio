import { Component } from '@angular/core';
import { ProjectCard } from "../components/project-card/project-card";
import { SeparationLine } from "../components/separation-line/separation-line";
import { ContactCard } from "../components/contact-card/contact-card";

@Component({
  selector: 'app-home',
  imports: [ProjectCard, SeparationLine, ContactCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
