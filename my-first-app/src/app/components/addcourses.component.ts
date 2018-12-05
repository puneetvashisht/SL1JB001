import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
    `
})
export class AddCoursesComponent implements OnInit {

    constructor(private http: Http) { }

    message: string = ''

    ngOnInit() { 

    }
    addCourse(title: string, summary: string){
        console.log(title, summary)
        var obj = {title, summary}
        this.http.post('http://localhost:3000/courses', obj)
        .toPromise() 
        .then((res)=> res.json())
        .then((data)=> {
          console.log(data.message)
          this.message = data.message
    
        })
    
      }

}