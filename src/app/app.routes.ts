import { Routes } from '@angular/router';
import { Courses } from './courses/courses';
import { Counter } from './counter/counter';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'courses',
    component: Courses,
  },
  {
    path: 'counter',
    component: Counter,
  },
];
