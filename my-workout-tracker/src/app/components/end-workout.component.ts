import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Workout } from '../models/Workout';
import { WorkoutActiveService } from '../services/workout-active.service';

@Component({
    selector: 'end-workout',
    template: `
    <h2>End Workout Component</h2>

    <form [formGroup]="workoutForm" (submit)="endWorkout()">
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Title</span>
        </div>
        <input type="text"  class="form-control" formControlName="title"  placeholder="Enter Title" aria-label="Username" aria-describedby="basic-addon1">
        </div>
       
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="notes">Notes</span>
        </div>
        <textarea   class="form-control"  formControlName="notes" id="notes" rows="3"></textarea>
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">End Date</span>
        </div>
       {{now | date:'mediumDate'}}
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="enddate">End Time</span>
        </div>
        {{now | date:'mediumTime'}}
        </div>

        <div class="input-group mb-3">
        <button type="submit" class="btn btn-secondary"> End Workout </button>
    </div>
    </form>
    `
})
export class EndWorkoutComponent implements OnInit {

    now: Date = new Date();

    constructor(private route: ActivatedRoute, private workoutActiveService: WorkoutActiveService) { }

    workoutForm: FormGroup

   title: string
   notes: string
   id: string

    ngOnInit() { 

       
          this.title = this.route.snapshot.paramMap.get('title')
          this.notes = this.route.snapshot.paramMap.get('notes')
          this.id = this.route.snapshot.paramMap.get('id')

          this.workoutForm = new FormGroup({
            'title': new FormControl({value: this.title,  disabled: true}),
            'notes': new FormControl({value: this.notes,  disabled: true}),
            'id': new FormControl({value: this.id,  hidden: true}),
          });


    }

    endWorkout(){
        console.log('add workout active service to be invoked')
        console.log(this.workoutForm.value.id.value)
       this.workoutActiveService.endWorkout(this.workoutForm.value.id.value)
    }

}