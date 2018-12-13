import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';
import { LogService } from '../services/log.service';
import { CourseLocalService } from '../services/course-local.service';

@Component({
    selector: 'course-add',
    template: `
    <div style="text-align:center">
  <h1>
    Add Course!
  </h1>
</div>
<hr>
<div class="container">
  <div class="row">

      <div class="alert alert-success" role="alert">
         {{message}}
        </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
      </div>
      <input #title (change)="0" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Summary</span>
      </div>
      <input #summary (change)="0" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
  </div>

  <button type="button" class="btn btn-primary" (click)="addCourse(title.value, summary.value)">Add Course</button>
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
    `,
    providers: [LogService]
})
export class AddCoursesComponent implements OnInit {

    constructor(private http: Http, private courseService: CourseLocalService, private logService: LogService) { }

    message: string = ''
    messages: Array<string> = []

    ngOnInit() { 

    }
    addCourse(title: string, summary: string){
        console.log(title, summary)
        var course = new Course(title, summary)
        this.courseService.addCourse(course)
        .then((data)=> {
          console.log(data.message)
          this.message = data.message
        })
    
      }

      addLog(message:string){
        this.logService.log(message);
      }

      getLogs(){
        this.messages = this.logService.fetchAll();
    }

}