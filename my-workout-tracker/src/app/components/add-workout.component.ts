import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';

@Component({
    selector: 'add-workout',
    template: `
        <h2>Add workout Component</h2>


        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Title</span>
        </div>
        <input type="text" class="form-control" placeholder="Enter Title" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="notes">Notes</span>
        </div>
        <textarea class="form-control" id="notes" rows="3"></textarea>
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Calories Burnt Per Minute</span>
        </div>
        <input type="number" class="form-control" placeholder="Enter Calories Burnt Per Minute" aria-label="Username" aria-describedby="basic-addon1">
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
        <button type="button" class="btn btn-secondary" (click)="addWorkout()"> Add Workout </button>
    </div>

    `
})
export class AddWorkoutComponent implements OnInit {

    categories: Array<Category> = []

    constructor(private categoryService: CategoryService) { }

    ngOnInit() { 
        this.categoryService.fetchAllCategories()
        .then((data)=> {
            this.categories = data;
        })

    }

    addWorkout(){
        console.log('add workout service to be invoked')
    }

}