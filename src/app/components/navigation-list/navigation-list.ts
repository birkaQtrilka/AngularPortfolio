import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navigation-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './navigation-list.html',
  styleUrl: './navigation-list.scss'
})
export class NavigationList {
  @Input() adventures: { title: string }[] = [];

  @Output() selectAdventure = new EventEmitter<number>();

  onClick(index: number) {
    this.selectAdventure.emit(index);
  }
}
