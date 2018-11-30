import { Component } from '@angular/core';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Array<Course> = [

    {title: 'Angular', summary: 'framework from google!!'},
    {title: 'React', summary: 'library from facebook!!'},
    {title: 'Ember', summary: 'ui open source framework!!'},
    {title: 'Js', summary: 'backbone programming language'}
  ]
}
