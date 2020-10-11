import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchDetails: Array<any> = [];
  flightDetails: Array<any> = [];
  pageSizeOptions = [5,10,25,100];
  isSuccess = true;
  isNodata = false;
  isError = false;
  isLoading = false;

  constructor(public service: SearchService, public router: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.getQueryParams();
    this.isLoading = true;
    this.service.getSearchData(params).subscribe(data => {
      this.isLoading = false;
      this.isSuccess = true;
      this.isError = false;
      if (data && Object.keys(data) && Object.keys(data).length) {
        console.log(data);
        this.isNodata = false;
        this.flightDetails = data.data;
        this.service.setSearchData(this.flightDetails);
        
      } else {
        this.isNodata = true;
      }
    }, err => {
      this.isError = true;
      this.isSuccess = false;
      this.isLoading = false;
      this.isNodata = false;
    })
  }

  getQueryParams(): any {
    let queryParam;
    this.router.queryParams.subscribe(data => {
      queryParam =  data;
    })
    return queryParam;
  }
}
