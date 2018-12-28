import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'start-workout',
    template: `
    <h2>Start Workout Component</h2>

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
            <span class="input-group-text" id="basic-addon1">Start Date</span>
        </div>
       {{now | date:'mediumDate'}}
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="enddate">End Date</span>
        </div>
        {{now | date:'mediumTime'}}
        </div>

        <div class="input-group mb-3">
        <button type="submit" class="btn btn-secondary" [disabled]="!workoutForm.valid"> Start Workout </button>
    </div>
    </form>
    `
})
export class StartWorkoutComponent implements OnInit {

    now: Date = new Date();

    constructor() { }


    workoutForm: FormGroup
    ngOnInit() { 

        this.workoutForm = new FormGroup({
            'title': new FormControl('', [Validators.required]),
            'notes': new FormControl(''),
            // 'startd': new FormControl('', [Validators.required]),
            // 'category': new FormControl('', [Validators.required])
            // 'alterEgo': new FormControl(this.hero.alterEgo),
            // 'power': new FormControl(this.hero.power, Validators.required)
          });

    }

}