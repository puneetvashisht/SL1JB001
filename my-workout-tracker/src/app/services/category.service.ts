import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {
    
    constructor(private http: Http) { }


    fetchAllCategories(): Promise<any>{
       return this.http.get('assets/category.json')
        .toPromise()
        .then(res=>res.json())
    }

}