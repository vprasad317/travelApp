import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  apibaseUrl = "https://test.api.amadeus.com";
  airportsList: string;
  info: string;
  getSearchInfo: string;

  constructor() { 
    this.getAirportsLis();
    this.common();
    this.searchData();
  }

  common(): void {
    this.info = this.apibaseUrl + '/v1/security/oauth2/token';
  }
  getAirportsLis(): void {
    this.airportsList = 'assets/json/airports.json';
  }

  searchData(): void {
    this.getSearchInfo = this.apibaseUrl + '/v1/shopping/flight-destinations';
  }
}
