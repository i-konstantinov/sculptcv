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
    ],
  },
];
