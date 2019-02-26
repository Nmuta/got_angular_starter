import { Component, OnInit } from '@angular/core';
import {RegionServiceService} from '../region-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private reg:RegionServiceService) { }

  links:string[] = Object.keys(this.reg.getRegions());
  ngOnInit() {
  }


}
