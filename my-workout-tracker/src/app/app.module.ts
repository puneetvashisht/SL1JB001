import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {HttpModule} from '@angular/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category.component';
import { ViewWorkoutComponent } from './components/view-workout.component';
import { CategoryService } from './services/category.service';
import { SearchPipe } from './pipes/search.pipe';
import { AddWorkoutComponent } from './components/add-workout.component';

const appRoutes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'view',component: ViewWorkoutComponent },
  { path: 'create',component: AddWorkoutComponent }
]

@NgModule({
  declarations: [
    AppComponent, CategoryComponent, ViewWorkoutComponent, AddWorkoutComponent, SearchPipe
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule,ReactiveFormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
