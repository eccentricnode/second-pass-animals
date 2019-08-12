import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '.';
import { environment } from '../environments/environment';
import { AnimalsEffects } from './animals/animals.effects';


@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AnimalsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: environment.production,
    }) : [],
  ],
})
export class CoreStateModule {}
