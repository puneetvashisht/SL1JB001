import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-badge',
    template: `
    <button type="button" class="btn btn-primary" (click)="incrementCount()">
        {{caption}} <span class="badge badge-light">{{count}}</span>
    </button>
    `
})
export class BadgeComponent implements OnInit {

    @Input('caption') caption: string = 'Default' 
    @Input('count') count: number = 0

    constructor() { }

    incrementCount(){
        this.count++
    }

    ngOnInit() { 

    }

}