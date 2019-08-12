import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAnimals from './animals.reducer';
import { emptyAnimal } from '@animals/core-data';

export const selectAnimalsState = createFeatureSelector<fromAnimals.AnimalsState>('animals');

export const selectAnimalIds = createSelector(
  selectAnimalsState,
  fromAnimals.selectAnimalIds
);

export const selectAnimalEntities = createSelector(
  selectAnimalsState,
  fromAnimals.selectAnimalEntities
);

export const selectAllAnimals = createSelector(
  selectAnimalsState,
  fromAnimals.selectAllAnimals
);

export const selectCurrentAnimalId = createSelector(
  selectAnimalsState,
  fromAnimals.getSelectedAnimalId
);

export const selectCurrentAnimal = createSelector(
  selectAnimalEntities,
  selectCurrentAnimalId,
  (animalEntities, animalId) => {
    return animalId ? animalEntities[animalId] : Object.assign({}, emptyAnimal);
  }
)