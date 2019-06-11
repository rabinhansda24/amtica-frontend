import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getHttpGetHeader() {
    const token = sessionStorage.getItem('token');
    let headers;
    if (token !== null || token !== undefined) {
      headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization' : token
      });
    } else {
      headers = new HttpHeaders({
        'Content-Type':  'application/json'
      });
    }

    return headers;
  }

  getHttpGetOptions() {
    const httpOptions = {
      headers: this.getHttpGetHeader()
    };
    return httpOptions;
  }
  getHttpPostOptions() {
    const httpOptions = {
      headers: this.getHttpGetHeader()
    };
    return httpOptions;
  }

}
