import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.scss',
})
export class CounterValue implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  counter: number = 0;
  counterSubscription: Subscription | null = null;
  ngOnInit() {
    this.counterSubscription = this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    });
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
