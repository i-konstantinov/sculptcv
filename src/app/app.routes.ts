import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { Home } from './components/home/home';
import { Templates } from './components/templates/templates';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'templates',
        component: Templates,
      },
    ],
  },
];
