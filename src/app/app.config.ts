import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { SculptPreset } from './theme';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: SculptPreset,
        options: {
          darkModeSelector: 'system',
          // darkModeSelector: false,
          // darkModeSelector: '.app-dark' // manual toggle
        }
      }
    })
  ]
};
