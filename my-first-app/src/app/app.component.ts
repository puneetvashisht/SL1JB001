import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http: Http){

  }

  ngOnInit(){
    // perform initialization

    this.http.get('assets/dummy.json')
    .toPromise()
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data)
      this.courses = data;
    })
  }

  courses: Array<Course> = [

   
  ]
}
