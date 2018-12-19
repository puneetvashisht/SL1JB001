import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(values: Array<any>, name: string) {

        console.log(values, name)
      
        var filteredValues = values.filter(value => value.name.includes(name))
        // console.log(filteredCourses)
        return filteredValues;
    }

}