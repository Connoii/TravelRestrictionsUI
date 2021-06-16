import { Component, OnInit } from '@angular/core';
import { RestrictionService } from '../../services/restriction.service';

@Component({
  selector: 'app-travel-grid',
  templateUrl: './travel-grid.component.html',
  styleUrls: ['./travel-grid.component.scss']
})
export class TravelGridComponent implements OnInit {
  public restrictions;

  constructor(private restrictionService: RestrictionService) {
    this.restrictions = new Array();
   }

  ngOnInit() {
    this.getRestrictions();
  }

  getRestrictions() {
    this.restrictionService.getRestrictions().subscribe(
      data => { this.restrictions = data},
      err => console.error(err),
      () => console.log('restrictions loaded')
    );
  }

}
