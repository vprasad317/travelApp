import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { SearchService } from '../service/search.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.component.html',
  styleUrls: ['./search-controls.component.scss']
})
export class SearchControlsComponent implements OnInit {

  originFrmCtrl = new FormControl("", [Validators.required]);
  tripFrmCtrl = new FormControl();
  dateFrmCtrl = new FormControl();

  airportsList = [];
  tripType = ['OneWay', 'RoundTrip'];

  constructor(public service: SearchService, public router: Router) {
    this.dateFrmCtrl.setValue(new Date());
   }

  ngOnInit(): void {
    this.service.getAirportsList().subscribe(data => {
      if (data && Object.keys(data)) {
        this.airportsList = data.airports;
      }
    })
    this.tripFrmCtrl.setValue('RoundTrip');
    }

    getFlightDetails(): void {
      const searchReq = {
        origin: this.originFrmCtrl.value.substring(0,3),
        departureDate: moment(this.dateFrmCtrl.value).format('YYYY-MM-DD'),
        oneWay: this.tripFrmCtrl.value === 'OneWay' ? true : false
      }
      this.router.navigate(['search-details'],
      {queryParams: {origin: searchReq.origin,
        oneWay: searchReq.oneWay,
        departureDate: searchReq.departureDate}});
    }
}
