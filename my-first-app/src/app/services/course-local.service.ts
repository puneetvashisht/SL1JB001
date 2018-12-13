import { Injectable, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Course } from '../model/course';


const STORAGE_KEY = 'my-courses';
@Injectable()
export class CourseLocalService {
    
    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }


    getCourses(): Promise<any>{  
        return new Promise((resolve, reject)=>{
            const awesomenessLevel: number = this.storage.get(STORAGE_KEY) || 1337;
            this.storage.get(STORAGE_KEY);
            resolve({"message": "Successfully added to local storage"})
        })
    }


    addCourse(course: Course): Promise<any>{
        // return this.http.post(this.baseUrl, course)
        // .toPromise() 
        // .then((res)=> res.json())
        return new Promise((resolve, reject)=>{
            const awesomenessLevel: number = this.storage.get(STORAGE_KEY) || 1337;
            this.storage.set(STORAGE_KEY, course);
            resolve({"message": "Successfully added to local storage"})
        })
       
        // return awesomenessLevel;
    }

}