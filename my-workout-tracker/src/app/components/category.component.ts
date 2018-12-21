import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';

@Component({
    selector: 'category',
    template: `
        <h2>Category Component</h2>

        <div class="row">
            <div class="col-8">
            <div class="alert alert-success" role="alert" *ngIf="message!=''">
            {{message}}
          </div>
          </div>
        </div>

        <div class="row">
        <div class="col">
            <input type="text" #category (change)="0" class="form-control" placeholder="Enter Category" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="col">
            <button type="button" class="btn btn-secondary" (click)="addCategory(category.value)"> + </button>
        </div>
       
        </div>

        <hr/>

        <div class="row">  
        <div class="col-6"> 
            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Search</span>
            </div>
            <input type="text" #searchValue (keyup)="0" class="form-control" placeholder="Search Category" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>
        </div>

        <div class="row">   
        <div class="col-8"> 
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let category of categories | search: searchValue.value">
            <div class="row">
            <div class="col-8">
                {{category.name}} 
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-secondary" (click)="addCategory(category.value)"> Edit </button>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-secondary" (click)="deleteCategory(category._id)"> Delete </button>
            </div>
           
            </div>
            </li>
        </ul>
        </div>
        </div>
    `
})
export class CategoryComponent implements OnInit {

    categories: Array<Category> = []
    message: string = ''

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
            this.message = data.message

        })
    }

    deleteCategory(id: string){
        console.log('Deleting ID ', id)
        this.categoryService.deleteCategory(id)
        .then((data)=>{
            console.log(data)
            this.message = data.msg
        })
    }

}