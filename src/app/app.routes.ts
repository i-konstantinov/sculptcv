import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { Home } from './components/home/home';

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
        loadComponent: () => import('./components/templates/templates').then((m) => m.Templates),
      },
      {
        path: 'create',
        loadComponent: () => import('./components/create/create').then((m) => m.Create),
      },
    ],
  },
];
