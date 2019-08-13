import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '.';
import { AnimalsEffects } from './animals/animals.effects';
import { AnimalsFacade } from './animals/animals.facade';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
    EffectsModule.forRoot([AnimalsEffects]),
  ],
  providers: [
    AnimalsFacade
  ]
})
export class CoreStateModule {}
