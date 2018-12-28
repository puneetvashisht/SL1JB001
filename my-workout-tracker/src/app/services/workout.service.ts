import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Workout } from '../models/Workout';


const baseUrl:string = 'http://localhost:3000/workout/'

@Injectable()
export class WorkoutService {
    
    constructor(private http: Http) { }


    fetchAllWorkouts(): Promise<any>{
        return this.http.get(baseUrl)
        .toPromise()
        .then(res=>res.json())
    }
    addWorkout(workout:Workout): Promise<any>{
        console.log('Structure', workout)
        return this.http.post(baseUrl, workout)
        .toPromise()
        .then(res=>res.json())
    }

    
}