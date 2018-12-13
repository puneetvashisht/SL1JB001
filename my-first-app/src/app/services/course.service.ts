import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../model/course';


// const baseUrl: string = 'http://localhost:8080/courses'
@Injectable()
export class CourseService {
    
    constructor(private http: Http, private baseUrl: string) { }

    // baseUrl: string = 'http://localhost:8080/courses'

    getCourses(): Promise<any>{
        return this.http.get(this.baseUrl)
        .toPromise()
        .then((res) => res.json())
    }


    addCourse(course: Course): Promise<any>{
        return this.http.post(this.baseUrl, course)
        .toPromise() 
        .then((res)=> res.json())
    }

}