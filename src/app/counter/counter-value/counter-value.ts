import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.scss',
})
export class CounterValue {
  @Input() counter: number = 10;
}
