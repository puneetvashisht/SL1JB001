import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../services/tracker.service';

@Component({
    selector: 'tracker-comp',
    template: `
        <h1>Tracker Component</h1>

        <ul>
            <li *ngFor="let caloryLog of caloriesLog">{{caloryLog.date | date:'fullDate'}} : {{caloryLog.cspent}}</li>
        </ul>

    `
})
export class TrackerComponent implements OnInit {

    constructor(private trackerService: TrackerService) { }

    caloriesLog : Array<any>

    ngOnInit() { 

        this.trackerService.fetchDailyCaloriesSpent()
        .then((data) => {
            console.log(data)
            this.caloriesLog = data
        })

    }

}