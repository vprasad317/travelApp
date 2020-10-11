import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { ApiUrlsService } from './service/api-urls.service';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public service: SearchService, public urls: ApiUrlsService) {
    this.service.getUserInfo();
  }
}
