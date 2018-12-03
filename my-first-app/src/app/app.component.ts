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


  addCourse(title: string, summary: string){
    console.log(title, summary)
    var obj = {title, summary}
    this.http.post('dummyUrl', obj)
    .toPromise() 
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data)
    })

  }

  courses: Array<Course> = [

   
  ]
}
