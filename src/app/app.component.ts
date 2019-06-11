import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'user-auth';
  isLogedIn: any = 0;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.isLogedIn.subscribe(value => { this.isLogedIn = value; });
  }
}
