import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '.';
import { AnimalsEffects } from './animals/animals.effects';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AnimalsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
})
export class CoreStateModule {}
