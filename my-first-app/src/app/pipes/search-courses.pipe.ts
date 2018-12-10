import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course';

@Pipe({
    name: 'search'
})
export class SearchCoursesPipe implements PipeTransform {

    transform(courses: Array<Course>, courseName: string) {

        // console.log(courses, courseName)
      
        var filteredCourses = courses.filter(course => course.title.includes(courseName))
        // console.log(filteredCourses)
        return filteredCourses;
    }

}