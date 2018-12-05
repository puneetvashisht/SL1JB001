import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './components/card.component';
import {HttpModule} from '@angular/http'
import {RouterModule, Routes} from '@angular/router'
import { ViewCoursesComponent } from './components/viewcourses.component';
import { AddCoursesComponent } from './components/addcourses.component'

var routes: Routes = [
  {path: '', component: ViewCoursesComponent},
  {path: 'add', component: AddCoursesComponent}
]

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, CardComponent, ViewCoursesComponent, AddCoursesComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
