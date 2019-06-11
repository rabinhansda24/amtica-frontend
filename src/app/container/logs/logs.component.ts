import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getLoginLogs().subscribe(logs => {
      this.logs = logs['data'].logs;
      console.log(this.logs);
    });
  }

}
