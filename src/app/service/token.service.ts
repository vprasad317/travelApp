import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  acessToken: string;

  setToken(data): void {
    this.acessToken = data;
  }

  getToken(): any {
    return this.acessToken;
  }
}
