import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


const baseUrl:string = 'http://localhost:3000/categories/'

@Injectable()
export class CategoryService {
    
    constructor(private http: Http) { }


    fetchAllCategories(): Promise<any>{
       return this.http.get(baseUrl)
        .toPromise()
        .then(res=>res.json())
    }

    addCategory(category:string): Promise<any>{
        return this.http.post(baseUrl, {name:category})
        .toPromise()
        .then(res=>res.json())
    }

    deleteCategory(id: string): Promise<any>{
        return this.http.delete(baseUrl+id)
        .toPromise()
        .then(res=>res.json())

    }
}