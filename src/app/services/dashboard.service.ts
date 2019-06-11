import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HelperService } from './helper.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  isLogedIn: Subject<any> = new BehaviorSubject<any>(0);
  constructor(private http: HttpClient, private helperService: HelperService) { }

  getLoginLogs() {
    const options = this.helperService.getHttpGetOptions();
    return this.http.get(environment.apiHost + '/logs/login', options);
  }
  setIsLogedIn(value) {
    if(sessionStorage.getItem('token') !== null || sessionStorage.getItem('token') !== undefined) {
      this.isLogedIn.next(1);
    }
    this.isLogedIn.next(value);
  }

}
