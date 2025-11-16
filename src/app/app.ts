import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import { StarfieldDirective } from './directives/starfield.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, StarfieldDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularWebsite');
}
