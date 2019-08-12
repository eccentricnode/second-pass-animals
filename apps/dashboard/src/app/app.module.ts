import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NxModule } from '@nrwl/angular';
import { MaterialModule } from '@animals/material';
import { CoreDataModule } from '@animals/core-data';
import { CoreStateModule } from '@app/core-state';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsListComponent } from './animals/animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animals/animal-details/animal-details.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent, AnimalsComponent, AnimalsListComponent, AnimalDetailsComponent, LoginComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    NxModule.forRoot(),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
