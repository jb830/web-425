import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app.routing'; 
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const combinedRoutes = [
  ...AppRoutes,
  ...routes
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(combinedRoutes), provideClientHydration()]
};
