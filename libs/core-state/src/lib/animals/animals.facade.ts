import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllAnimals, selectCurrentAnimal } from './animals.selectors';
import { Animal } from '@animals/core-data';
import { AnimalsState } from './animals.reducer';
import * as AnimalsActions from './animals.actions';
import { AnimalsActionTypes } from './animals.actions';

@Injectable()
export class AnimalsFacade {
  allAnimals$ = this.store.pipe(select(selectAllAnimals));
  selectedAnimals$ = this.store.pipe(select(selectCurrentAnimal));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === AnimalsActionTypes.ADD_ANIMAL
        || action.type === AnimalsActionTypes.UPDATE_ANIMAL
        || action.type === AnimalsActionTypes.DELETE_ANIMAL
      )
    );

  constructor(private store: Store<AnimalsState>, private actions$: ActionsSubject) {}

  selectAnimal(animalId: string) {
    this.store.dispatch(new AnimalsActions.AnimalSelected(animalId))
  }

  loadAnimals() {
    this.store.dispatch(new AnimalsActions.LoadAnimals());
  }

  createAnimal(animal: Animal) {
    this.store.dispatch(new AnimalsActions.AddAnimal(animal));
  }

  updateAnimal(animal: Animal) {
    this.store.dispatch(new AnimalsActions.UpdateAnimal(animal));
  }

  deleteAnimal(animal: Animal) {
    this.store.dispatch(new AnimalsActions.DeleteAnimal(animal));
  }
}
