import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAppStore } from './app/store/app.state';

bootstrapApplication(App, {
  ...appConfig,
  providers: [...appConfig.providers, provideStore(), provideAppStore(), provideStoreDevtools()],
});
