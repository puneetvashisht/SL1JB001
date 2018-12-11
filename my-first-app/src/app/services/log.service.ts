import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    
    constructor() { }

    messages: Array<string> = []


    log(message: string){
        this.messages.push(message)
    }


    fetchAll(){
        return this.messages
    }
}