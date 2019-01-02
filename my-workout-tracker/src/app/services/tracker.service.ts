import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TrackerService {
    
    constructor(private http: Http) { }


    fetchDailyCaloriesSpent(): Promise<any>{
        return this.http.get('assets/dummy.json')
        .toPromise()
        .then(res=> res.json())
    }

}