import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../states/counter.actions';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.scss',
})
export class CounterButton {
  constructor(private store: Store<{ counter: number }>) {}

  OnIncrement() {
    this.store.dispatch(increment());
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }

  OnReset() {
    this.store.dispatch(reset());
  }
}
