import { Component } from '@angular/core';
import { ProjectCard } from "../components/project-card/project-card";
import { SeparationLine } from "../components/separation-line/separation-line";
import { ContactCard } from "../components/contact-card/contact-card";
import { CommonModule } from '@angular/common';
import { PROJECT_CARDS } from './constants/project-cards.constant';
import { TOOLS } from './constants/tools.constant';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProjectCard, SeparationLine, ContactCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly cards = PROJECT_CARDS;
  protected readonly tools = TOOLS;

}
