import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement, toggleCustomInput } from '../states/counter.actions';
import { getToggle } from '../states/counter.selector';

@Component({
  selector: 'app-custom-input',
  imports: [FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
})
export class CustomInput implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}
  customValue = 0;
  showCustomInput: boolean = false;

  ngOnInit() {
    this.store.select(getToggle).subscribe((toggle) => {
      this.showCustomInput = toggle;
    });
  }

  onCustomValueButtonClicked() {
    this.store.dispatch(customIncrement({ value: this.customValue }));
  }
  onToggleClicked() {
    this.store.dispatch(toggleCustomInput());
  }
}
