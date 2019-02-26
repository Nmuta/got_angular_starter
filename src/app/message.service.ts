import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  arya_list:string[] = ["Cersei"];

  constructor() { 

  }

  getMessages(){
    return this.arya_list; 
  }

  postMessage(msg:string){
    this.arya_list.push(msg);
  }


}
