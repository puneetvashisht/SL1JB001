import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {HttpModule} from '@angular/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category.component';
import { ViewWorkoutComponent } from './components/view-workout.component';
import { CategoryService } from './services/category.service';
import { SearchPipe } from './pipes/search.pipe';
import { AddWorkoutComponent } from './components/add-workout.component';
import { WorkoutService } from './services/workout.service';
import { StartWorkoutComponent } from './components/start-workout.component';
import { WorkoutActiveService } from './services/workout-active.service';
import { EndWorkoutComponent } from './components/end-workout.component';
import { TrackerComponent } from './components/tracker.component';
import { TrackerService } from './services/tracker.service';
import { GraphComponent } from './components/graph/graph.component';

const appRoutes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'view',component: ViewWorkoutComponent },
  { path: 'create',component: AddWorkoutComponent },
  { path: 'start',component: StartWorkoutComponent },
  { path: 'end',component: EndWorkoutComponent },
  { path: 'tracker',component: TrackerComponent }
]

@NgModule({
  declarations: [
    AppComponent, CategoryComponent, ViewWorkoutComponent, AddWorkoutComponent, StartWorkoutComponent, EndWorkoutComponent, TrackerComponent, SearchPipe, GraphComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule,ReactiveFormsModule,NgxChartsModule,
    BrowserAnimationsModule 
  ],
  providers: [CategoryService, WorkoutService, WorkoutActiveService, TrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
