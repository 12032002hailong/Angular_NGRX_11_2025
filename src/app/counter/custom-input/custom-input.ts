import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement, toggleCustomInput } from '../states/counter.actions';
import { getToggle } from '../states/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-custom-input',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
})
export class CustomInput implements OnInit {
  constructor(private store: Store<AppState>) {}
  customValue = 0;
  showCustomInput$: Observable<boolean> | null = null;

  ngOnInit() {
    this.showCustomInput$ = this.store.select(getToggle);
  }

  onCustomValueButtonClicked() {
    this.store.dispatch(customIncrement({ value: +this.customValue }));
  }
  onToggleClicked() {
    this.store.dispatch(toggleCustomInput());
  }
}
