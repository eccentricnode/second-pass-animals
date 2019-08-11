import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsListComponent } from './animals/animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animals/animal-details/animal-details.component';

@NgModule({
  declarations: [AppComponent, AnimalsComponent, AnimalsListComponent, AnimalDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
