import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.scss',
})
export class CounterButton {
  @Output() incrementClicked = new EventEmitter<void>();
  @Output() decrementClicked = new EventEmitter<void>();
  @Output() resetClicked = new EventEmitter<void>();

  OnIncrement() {
    this.incrementClicked.emit();
  }

  OnDecrement() {
    this.decrementClicked.emit();
  }

  OnReset() {
    this.resetClicked.emit();
  }
}
