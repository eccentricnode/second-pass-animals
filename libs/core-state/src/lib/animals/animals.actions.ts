import { Action } from '@ngrx/store';

import { Animal } from '@animals/core-data';

export enum AnimalsActionTypes {
  ANIMALS_ACTION  = '[ANIMAL] Animals Action',
  ANIMAL_SELECTED = '[ANIMAL] Animal Selected',
  LOAD_ANIMALS    = '[ANIMAL] Load Animals',
  ANIMALS_LOADED  = '[ANIMAL] Animals Loaded',
  ADD_ANIMAL      = '[ANIMAL] Add Animal',
  ANIMAL_ADDED    = '[ANIMAL] Animal Added',
  UPDATE_ANIMAL   = '[ANIMAL] Update Animal',
  ANIMAL_UPDATED  = '[ANIMAL] Animal Updated',
  DELETE_ANIMAL   = '[ANIMAL] Delete Animal',
  ANIMAL_DELETED  = '[ANIMAL] Animal Deleted',
}

export class Animals implements Action {
  readonly type = AnimalsActionTypes.ANIMALS_ACTION;
}

export class AnimalSelected implements Action {
  readonly type = AnimalsActionTypes.ANIMAL_SELECTED;
  constructor(public payload ) { }
}

export class LoadAnimals implements Action {
  readonly type = AnimalsActionTypes.LOAD_ANIMALS;
  constructor() { }
}

export class AnimalsLoaded implements Action {
  readonly type = AnimalsActionTypes.ANIMALS_LOADED;
  constructor(public payload: Animal[]) {}
}

export class AddAnimal implements Action {
  readonly type = AnimalsActionTypes.ADD_ANIMAL;
  constructor(public payload: Animal) { }
}

export class AnimalAdded implements Action {
  readonly type = AnimalsActionTypes.ANIMAL_ADDED;
  constructor (public payload: Animal) { }
}

export class UpdateAnimal implements Action {
  readonly type = AnimalsActionTypes.UPDATE_ANIMAL;
  constructor(public payload: Animal) { }
}

export class AnimalUpdated implements Action {
  readonly type = AnimalsActionTypes.ANIMAL_UPDATED;
  constructor(public payload: Animal) { }
}

export class DeleteAnimal implements Action { 
  readonly type = AnimalsActionTypes.DELETE_ANIMAL;
  constructor(public payload: Animal) { }
}

export class AnimalDeleted implements Action {
  readonly type = AnimalsActionTypes.ANIMAL_DELETED;
  constructor(public payload: Animal) { }
}

export type AnimalsAction = Animals
  | AnimalSelected
  | LoadAnimals
  | AnimalsLoaded
  | AddAnimal
  | AnimalAdded
  | UpdateAnimal
  | AnimalUpdated
  | DeleteAnimal
  | AnimalDeleted
  ;


