import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.scss',
})
export class CounterValue {
  countValue: number = 10;
}
