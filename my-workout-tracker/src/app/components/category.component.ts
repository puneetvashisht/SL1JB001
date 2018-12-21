import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';

@Component({
    selector: 'category',
    template: `
        <h2>Category Component</h2>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Search</span>
        </div>
        <input type="text" #searchValue (keyup)="0" class="form-control" placeholder="Search Category" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>


        <div>
        <input type="text" #category (change)="0" class="form-control" placeholder="Enter Category" aria-label="Username" aria-describedby="basic-addon1"/>
        <button type="button" class="btn btn-secondary" (click)="addCategory(category.value)"> + </button>
        </div>

        <hr/>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let category of categories | search: searchValue.value">{{category.name}}</li>
        </ul>
    `
})
export class CategoryComponent implements OnInit {

    categories: Array<Category> = []

    constructor(private categoryService: CategoryService) { }

    ngOnInit() { 
        this.categoryService.fetchAllCategories()
        .then((data)=> {
            this.categories = data;
        })

    }

    addCategory(category: string){
        this.categoryService.addCategory(category)
        .then((data)=> {
            console.log(data);
        })
    }

}