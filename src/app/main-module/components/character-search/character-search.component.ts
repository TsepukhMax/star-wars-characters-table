import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrl: './character-search.component.scss',
  standalone: false,
})
export class CharacterSearchComponent {
  public value = "";

  @Output() searchTermChanged = new EventEmitter<string>();

  onInput(): void {
    this.searchTermChanged.emit(this.value);
  }

  onReset(): void {
    this.value = "";
    this.searchTermChanged.emit('');
  }
}