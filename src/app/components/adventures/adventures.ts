import { Component, ViewChild } from '@angular/core';
import { CodingAdventure } from '../../models/coding-adventure.model';
import { CODING_BOIDS } from './constants/boids.adventure';
import { CODING_DOTS } from './constants/dots.adventure';
import { CODING_IK } from './constants/ik.adventure';
import { CODING_PATHFINDING } from './constants/dungeon.adventure';
import { CODING_PHYSICS } from './constants/physics.adventure';
import { CODING_WFC } from './constants/wfc.adventure';
import { AdventureArticle } from './adventure-article/adventure-article';
import { TagFilter } from "./tag-filter/tag-filter";

@Component({
  selector: 'app-adventures',
  imports: [
    AdventureArticle,
    TagFilter
],
  templateUrl: './adventures.html',
  styleUrl: './adventures.scss'
})
export class Adventures {
  protected adventures: CodingAdventure[] = [
    CODING_BOIDS,
    CODING_DOTS,
    CODING_IK,
    CODING_PATHFINDING,
    CODING_PHYSICS,
    CODING_WFC,
  ];
  @ViewChild(TagFilter) tagFilter!: TagFilter;
  filteredAdventures = [...this.adventures];

  allTags = Array.from(
    new Set(this.adventures.flatMap(a => a.tags))
  );

  public onTagFilterChanged() {
    this.filteredAdventures = this.tagFilter.applyFilter(this.adventures, a => a.tags, a => a.title);
    
  }
}
