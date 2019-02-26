import { Component, OnInit } from '@angular/core';
import {RegionServiceService} from '../region-service.service'; 
import {MessageService}  from '../message.service';

@Component({
  selector: 'app-winterfell',
  templateUrl: './winterfell.component.html',
  styleUrls: ['./winterfell.component.scss']
})
export class WinterfellComponent implements OnInit {

  constructor(private reggie:RegionServiceService, private mess:MessageService) { }

  region_data:{}; 
  my_data: string;
  new_list_item:string;
  arya_list:string[]; 

  ngOnInit() {
    this.region_data = this.reggie.getRegions(); 
    this.my_data  = this.region_data['winterfell']; 
    this.arya_list = this.mess.getMessages();
  }

  postMessage(){
   this.mess.postMessage(this.new_list_item);
   this.arya_list = this.mess.getMessages();
  }

  updateInput(e:any){
    this.new_list_item = e.target.value;
  }

  




}
