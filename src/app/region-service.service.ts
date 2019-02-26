import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionServiceService {

  constructor() { }

  places = {dorne: "hot place", winterfell: "a very cold place", 
  essos: "sandy place", braavos: "brave place"};

  getRegions(){
    return this.places;
  }
}
