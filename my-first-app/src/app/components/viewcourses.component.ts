import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../model/course';

@Component({
    selector: 'course-view',
    template: `
        <div style="text-align:center">
        <h1>
        {{'Courses List!' }} <span><small>{{today | date: 'short'}}</small></span>
        </h1>

        </div>
        <hr>
        <div class="container">

        <div class="row">
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Search Course</span>
        </div>
        <input type="text" #searchTitle (keyup)="0" class="form-control" placeholder="Enter Course Title" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        </div>
        <div class="row">
            <my-card *ngFor="let course of courses| search:searchTitle.value;let i = index " [title]="course.title" [summary]="course.summary" [key]="i"></my-card>
        </div>
        </div>
    `
})
export class ViewCoursesComponent implements OnInit {

    constructor(private http: Http) {

    }
    courses: Array<Course> = []

    today: Date = new Date();

    ngOnInit() {
        // perform initialization
        // this.http.get('assets/dummy.json')
        console.log('Init...')
        this.http.get('http://localhost:3000/courses')
            .toPromise()
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.courses = data;
            })
    }





}