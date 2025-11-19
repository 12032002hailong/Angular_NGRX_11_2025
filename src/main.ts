import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './app/counter/states/counter.reducer';

bootstrapApplication(App, {
  ...appConfig,
  providers: [...appConfig.providers, provideStore(), provideState('counter', counterReducer)],
});
