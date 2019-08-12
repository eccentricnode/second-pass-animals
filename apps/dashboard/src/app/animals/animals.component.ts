import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Animal } from '@animals/core-data';
import { AnimalsFacade } from '@app/core-state';

@Component({
  selector: 'animals-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  form: FormGroup;
  animals$: Observable<Animal[]> = this.animalsFacade.allAnimals$;
  selectedAnimal$: Observable<Animal> = this.animalsFacade.selectedAnimal$

  constructor(
    private animalsFacade: AnimalsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.animalsFacade.loadAnimals();
    this.initForm();
    this.animalsFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectAnimal(animal) {
    this.animalsFacade.selectAnimal(animal.id);
  }

  saveAnimal(animal: Animal) {
    animal.id ? this.animalsFacade.updateAnimal(animal) : this.animalsFacade.createAnimal(animal);
  }

  removeAnimal(animal) {
    this.animalsFacade.deleteAnimal(animal);
  }

  reset() {
    this.form.reset();
    this.selectAnimal({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      height: ['', Validators.compose([Validators.required])],
      mass: ['', Validators.compose([Validators.required])],
      continent: ['', Validators.compose([Validators.required])],
    });
  }
}
