import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-card',
    template: `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{summary}}</p>
      <my-badge caption="Votes" count="0"></my-badge>
    </div>
  </div>
    `
})
export class CardComponent implements OnInit {

    @Input('title') title: string = 'Default' 
    @Input('summary') summary: string

    constructor() { }


    ngOnInit() { 

    }

}