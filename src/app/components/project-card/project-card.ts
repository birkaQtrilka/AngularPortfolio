import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-project-card',
  imports: [RouterModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() title!: string;
  @Input() imagePath!: string
  @Input() description!: string;
  @Input() route: string | any[] = '/';

}
