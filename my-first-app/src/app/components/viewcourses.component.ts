import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { LogService } from '../services/log.service';

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

        <div class="row">
        <input #message (change)="0" type="text" placeholder="Write message" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        <button type="button" class="btn btn-primary" (click)="addLog(message.value)">Add Message to Log</button>
        <div>

        <div class="row">
        
        <button type="button" class="btn btn-primary" (click)="getLogs()">Display Log</button>
        <ul>
            <li *ngFor="let msg of messages">{{msg}}</li>
        </ul>
        <div>


        </div>
    `,
    providers: [LogService]
})
export class ViewCoursesComponent implements OnInit {

    constructor(private http: Http, private courseService: CourseService, private logService: LogService) {

    }
    courses: Array<Course> = []
    messages: Array<string> = []

    today: Date = new Date();

    ngOnInit() {
        // perform initialization
        // this.http.get('assets/dummy.json')
       console.log('Init...')
       this.courseService.getCourses()
            .then((data) => {
                console.log(data)
                this.courses = data;
            })
    }

    addLog(message:string){
        this.logService.log(message);
      }

      getLogs(){
          this.messages = this.logService.fetchAll();
      }





}