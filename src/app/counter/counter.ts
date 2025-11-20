import { Component, Input } from '@angular/core';
import { CounterValue } from './counter-value/counter-value';
import { CounterButton } from './counter-button/counter-button';
import { CustomInput } from './custom-input/custom-input';

@Component({
  selector: 'app-counter',
  imports: [CounterValue, CounterButton, CustomInput],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counter: number = 0;

  incrementCount() {
    this.counter++;
  }

  decrementCount() {
    this.counter--;
  }

  resetCount() {
    this.counter = 0;
  }
}
