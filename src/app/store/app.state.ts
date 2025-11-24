import { EnvironmentProviders, makeEnvironmentProviders, Provider } from '@angular/core';
import { provideStore, provideState } from '@ngrx/store';
import { counterReducer } from '../counter/states/counter.reducer';
import { coursesReducer } from '../courses/state/courses.reducer';
import { CounterState } from '../counter/states/counter.state';
import { CoursesState } from '../courses/state/courses.state';

export interface AppState {
  counter: CounterState;
  courses: CoursesState;
}

export function provideAppStore() {
  return makeEnvironmentProviders([
    provideStore(),
    provideState('counter', counterReducer),
    provideState('courses', coursesReducer),
  ]);
}
