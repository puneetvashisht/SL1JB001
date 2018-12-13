import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './components/card.component';
import {HttpModule, Http} from '@angular/http'
import {RouterModule, Routes} from '@angular/router'
import { ViewCoursesComponent } from './components/viewcourses.component';
import { AddCoursesComponent } from './components/addcourses.component'
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchCoursesPipe } from './pipes/search-courses.pipe';
import { CourseService } from './services/course.service';
import { LogService } from './services/log.service';
import { StorageServiceModule } from 'angular-webstorage-service';
import { CourseLocalService } from './services/course-local.service';

var routes: Routes = [
  {path: '', component: ViewCoursesComponent},
  {path: 'add', component: AddCoursesComponent}
]



let courseServiceFactory = (http: Http) => {
  let condition: boolean = true;
  let baseUrl: string = ''
  
  if(condition){
     baseUrl = 'http://localhost:8080/courses'
  }
  else{
    baseUrl = 'http://localhost:3000/courses'
  }
 
  return new CourseService(http, baseUrl);
};

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, CardComponent, ViewCoursesComponent, AddCoursesComponent, ReversePipe,SearchCoursesPipe
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes),StorageServiceModule
  ],
  // providers: [CourseService],
  providers: [{
    provide: CourseService,
    useFactory: courseServiceFactory,
    deps: [Http]
  }
  ,
  CourseLocalService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
