import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Adventures} from './adventures/adventures';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'adventures',
    component: Adventures,
  }
];
