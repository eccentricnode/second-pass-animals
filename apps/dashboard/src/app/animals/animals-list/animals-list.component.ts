import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '@animals/core-data';

@Component({
  selector: 'animals-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent {
  @Input() animals: Animal[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(animal: Animal) {
    this.selected.emit(animal);
  }

  remove(animal: Animal) {
    this.deleted.emit(animal);
  }
}
