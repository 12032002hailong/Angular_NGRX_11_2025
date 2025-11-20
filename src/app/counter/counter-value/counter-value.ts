import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';
import { getCounter } from '../states/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-value',
  imports: [AsyncPipe],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.scss',
})
export class CounterValue implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}
  counter$: Observable<number> | null = null;
  counterSubscription: Subscription | null = null;
  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
