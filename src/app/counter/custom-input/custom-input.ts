import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement } from '../states/counter.actions';

@Component({
  selector: 'app-custom-input',
  imports: [FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
})
export class CustomInput {
  constructor(private store: Store<{ counter: CounterState }>) {}
  customValue = 0;

  onCustomValueButtonClicked() {
    this.store.dispatch(customIncrement({ value: this.customValue }));
  }
}
