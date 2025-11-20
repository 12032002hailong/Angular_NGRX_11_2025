import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';
import { getCounter } from '../states/counter.selector';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.scss',
})
export class CounterValue implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: CounterState }>) {}
  counter: number = 0;
  counterSubscription: Subscription | null = null;
  ngOnInit() {
    this.counterSubscription = this.store.select(getCounter).subscribe((count) => {
      this.counter = count;
    });
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
