import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-card',
    template: `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{summary}}</p>
      <my-badge caption="Votes" count="0"></my-badge>
      <button type="button" class="btn btn-danger" (click)="deleteCourse(i)">Delete</button>
    </div>
  </div>
    `
})
export class CardComponent implements OnInit {

    @Input('title') title: string = 'Default' 
    @Input('summary') summary: string
    @Input('key') i: number

    constructor(private http: Http) { }


    deleteCourse(index: number){

      console.log(index);

      this.http.delete('http://localhost:3000/courses/'+ index)
      .toPromise()
      .then((res)=>res.json())
      .then((data) => console.log(data))

    }

    ngOnInit() { 

    }

}