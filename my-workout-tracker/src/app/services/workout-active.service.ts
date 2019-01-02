import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


const baseUrl:string = 'http://localhost:3000/workout/'

@Injectable()
export class WorkoutActiveService {
    
    constructor(private http: Http) { }
    
    startWorkout(id:string): Promise<any>{
        console.log('Structure', id)
        return this.http.post(baseUrl + 'start', {workoutId: id})
        .toPromise()
        .then(res=>res.json())
    }
    endWorkout(id:string): Promise<any>{
        console.log('Structure', id)
        return this.http.post(baseUrl + 'end', {workoutId: id})
        .toPromise()
        .then(res=>res.json())
    }

    
}