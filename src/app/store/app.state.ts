import { EnvironmentProviders, makeEnvironmentProviders, Provider } from '@angular/core';
import { provideStore, provideState } from '@ngrx/store';
import { counterReducer } from '../counter/states/counter.reducer';
import { coursesReducer } from '../courses/state/courses.reducer';

export interface AppState {
  counter: ReturnType<typeof counterReducer>;
  courses: ReturnType<typeof coursesReducer>;
}

export function provideAppStore() {
  return makeEnvironmentProviders([
    provideStore(),
    provideState('counter', counterReducer),
    provideState('courses', coursesReducer),
  ]);
}
