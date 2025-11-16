import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Adventures} from './adventures/adventures';
import { ProjectPage } from './project/project';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'adventures',
    component: Adventures,
  },
  { path: 'projects/:id', component: ProjectPage },
];
