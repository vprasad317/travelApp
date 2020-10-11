import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ApiUrlsService } from './api-urls.service';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private urls: ApiUrlsService, public token: TokenService) { }

  get(url: string): Observable<any> {
    const token = this.token.getToken();
    const options = {
      headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json')
    }
    return this.http.get(url, {headers: options.headers});
  }

  post(url: string, obj: any): Observable<any> {
    const options = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    }
    return this.http.post(url, obj, {headers: options.headers});
  }
}
