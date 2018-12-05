import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../model/course';

@Component({
    selector: 'course-view',
    template: `
        <div style="text-align:center">
        <h1>
        Courses List!
        </h1>
        </div>
        <hr>
        <div class="container">
        <div class="row">
            <my-card *ngFor="let course of courses; let i = index" [title]="course.title" [summary]="course.summary" [key]="i"></my-card>
        </div>
        </div>
    `
})
export class ViewCoursesComponent implements OnInit {

    constructor(private http: Http) {

    }
    courses: Array<Course> = []

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