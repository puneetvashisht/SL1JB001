import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Workout } from '../models/Workout';

@Component({
    selector: 'add-workout',
    template: `
        <h2>Add workout Component</h2>

        <form [formGroup]="workoutForm" (submit)="addWorkout()">
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Title</span>
        </div>
        <input type="text" class="form-control" formControlName="title"  placeholder="Enter Title" aria-label="Username" aria-describedby="basic-addon1">
        </div>
       
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="notes">Notes</span>
        </div>
        <textarea class="form-control"  formControlName="notes" id="notes" rows="3"></textarea>
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Calories Burnt Per Minute</span>
        </div>
        <input type="number" formControlName="cbpm" class="form-control" placeholder="Enter Calories Burnt Per Minute" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="category">Category</span>
        </div>
        <select class="form-control" id="category">
            <option *ngFor="let category of categories">{{category.name}}</option>
        </select>
        </div>

        <div class="input-group mb-3">
        <button type="submit" class="btn btn-secondary" [disabled]="!workoutForm.valid"> Add Workout </button>
    </div>
    </form>

    `,
    styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
    .ng-valid {
        border: 1px solid green;
      }
  `]
})
export class AddWorkoutComponent implements OnInit {

    categories: Array<Category> = []

    constructor(private categoryService: CategoryService) { }

    workoutForm: FormGroup

    // workout: Workout = new Workout();

    ngOnInit() { 
        this.workoutForm = new FormGroup({
            'title': new FormControl('', [Validators.required]),
            'notes': new FormControl(''),
            'cbpm': new FormControl('', [Validators.required]),
            // 'alterEgo': new FormControl(this.hero.alterEgo),
            // 'power': new FormControl(this.hero.power, Validators.required)
          });
        


        this.categoryService.fetchAllCategories()
        .then((data)=> {
            this.categories = data;
        })

    }

    addWorkout(){
        
        console.log('add workout service to be invoked')
        console.log(this.workoutForm.value)
    }

}