import { Component } from '@angular/core';
import { CounterValue } from './counter-value/counter-value';
import { CounterButton } from './counter-button/counter-button';

@Component({
  selector: 'app-counter',
  imports: [CounterValue, CounterButton],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {}
