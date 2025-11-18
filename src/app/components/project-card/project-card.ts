import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlossyScrollDirective } from '../../directives/glossy-scroll.directive';
@Component({
  selector: 'app-project-card',
  imports: [RouterModule, GlossyScrollDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() title!: string;
  @Input() imagePath!: string
  @Input() description!: string;
  @Input() route: string | any[] = '/';

}
