import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { Workout } from '../models/Workout';
import { Router } from '@angular/router';

@Component({
    selector: 'view-workout',
    template: `
        <h2>View workout Component</h2>

        <div class="row">
        <div class="col-8">
        <div class="alert alert-success" role="alert" *ngIf="message!=''">
        {{message}}
      </div>
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
        <li class="list-group-item" *ngFor="let workout of workouts">
        <div class="row">
        <div class="col-6">
            <h4>{{workout.title}}</h4>
        </div>
        <div class="col-6">
            {{workout.notes}} 
        </div>
        <hr/>
        <div class="col-3">
            <button type="button" class="btn btn-secondary" (click)="addCategory(category.value)"> Edit </button>
        </div>
        <div class="col-3">
            <button type="button" class="btn btn-secondary" (click)="deleteCategory(category._id)"> Delete </button>
        </div>
        <div class="col-3">
            <button type="button" class="btn btn-secondary" (click)="startWorkout(workout._id, workout.title, workout.notes)"> Start </button>
        </div>
        <div class="col-3">
            <button type="button" class="btn btn-secondary" (click)="deleteCategory(category._id)"> End </button>
        </div>
       
        </div>
        </li>
    </ul>
    </div>
    </div>
    `
})
export class ViewWorkoutComponent implements OnInit {

    workouts: Array<Workout> = []
    message: string = ''

    constructor(private workoutService: WorkoutService, private router: Router) { }

    ngOnInit() { 
        this.workoutService.fetchAllWorkouts()
        .then((data)=> {
            this.workouts = data;
        })

    }

    startWorkout(id: string, title:string, notes:string){
        this.router.navigate(['start', {id, notes, title}]);
    }

}