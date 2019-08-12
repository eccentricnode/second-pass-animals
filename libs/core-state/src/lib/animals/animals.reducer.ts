import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Animal } from '@animals/core-data';
import { AnimalsAction, AnimalsActionTypes } from './animals.actions';

export interface AnimalsState extends EntityState<Animal> {
  selectedAnimalId: string | null;
}

export const adapter: EntityAdapter<Animal> = createEntityAdapter<Animal>();
export const initialState: AnimalsState = adapter.getInitialState({
  selectedAnimalId: null,
});

export function reducer(state: AnimalsState = initialState, action: AnimalsAction): AnimalsState {
  switch (action.type) {
    case AnimalsActionTypes.ANIMAL_SELECTED: {
      return Object.assign({}, state, { selectedAnimalId: action.payload });
    }

    case AnimalsActionTypes.ANIMALS_LOADED: {
      return adapter.upsertMany(action.payload, state);
    }

    case AnimalsActionTypes.ANIMAL_ADDED: {
      return adapter.addOne(action.payload, state);
    }

    case AnimalsActionTypes.ANIMAL_UPDATED: {
      return adapter.upsertOne(action.payload, state);
    }

    case AnimalsActionTypes.ANIMAL_DELETED: {
      return adapter.removeOne(action.payload.id, state);
    }
    
    default:
      return state;
  }
}

export const getSelectedAnimalId = (state: AnimalsState) => state.selectedAnimalId;

// get selectors...

export const { 
  selectIds: selectAnimalIds,
  selectEntities: selectAnimalEntities,
  selectAll: selectAllAnimals,
  selectTotal: selectAnimalTotal
} = adapter.getSelectors();