import { Injectable } from '@angular/core';
import { ApiUrlsService } from './api-urls.service';
import { ApiService } from './api.service';
import { ReplaySubject, Observable } from 'rxjs';
import { clientInfo } from '../interface/client-info';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  userInfo: ReplaySubject<any> = new ReplaySubject();
  searchData: Array<any> = [];
  constructor(public urls: ApiUrlsService, public api: ApiService, public token: TokenService) { }

  getUserInfo(): any {
    const url = this.urls.info;
    const clientCred = clientInfo;
    const apiInfo =`grant_type=client_credentials&client_id=${clientCred.client_id}&client_secret=${clientCred.client_secret}`;
    this.api.post(url, apiInfo).subscribe(data => {
      this.token.setToken(data.access_token);
      this.userInfo.next(data);
    });
  }

  getAirportsList(): any {
    const url = this.urls.airportsList;
    return this.api.get(url);
  }

  getSearchData(reqObj): Observable<any> {
    const url = `${this.urls.getSearchInfo}?origin=${reqObj.origin}&departureDate=${reqObj.departureDate}&oneWay=${reqObj.oneWay}`;
    return this.api.get(url);
  }

  setSearchData(data): void {
    this.searchData = data;
  }

  getSearchDetails(): any {
    return this.searchData;
  }
}
