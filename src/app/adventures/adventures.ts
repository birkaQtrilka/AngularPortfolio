import { Component } from '@angular/core';
import {AdventureArticle} from './adventure-article/adventure-article';

@Component({
  selector: 'app-adventures',
  imports: [
    AdventureArticle
  ],
  templateUrl: './adventures.html',
  styleUrl: './adventures.scss'
})
export class Adventures {

}
