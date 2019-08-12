import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@animals/material';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsListComponent } from './animals/animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animals/animal-details/animal-details.component';

@NgModule({
  declarations: [AppComponent, AnimalsComponent, AnimalsListComponent, AnimalDetailsComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
