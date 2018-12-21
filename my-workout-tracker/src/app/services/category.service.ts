import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {
    
    constructor(private http: Http) { }


    fetchAllCategories(): Promise<any>{
       return this.http.get('http://localhost:3000/categories')
        .toPromise()
        .then(res=>res.json())
    }

    addCategory(category:string): Promise<any>{
        return this.http.post('http://localhost:3000/categories', {name:category})
        .toPromise()
        .then(res=>res.json())
    }

}