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

  message: string = ''

  ngOnInit(){
    // perform initialization
    // this.http.get('assets/dummy.json')
    console.log('Init...')
    this.http.get('http://localhost:3000/courses')
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
    this.http.post('http://localhost:3000/courses', obj)
    .toPromise() 
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data.message)
      this.message = data.message

    })

  }

  courses: Array<Course> = [

   
  ]
}
