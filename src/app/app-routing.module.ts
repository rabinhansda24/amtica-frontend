import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './container/registration/registration.component';
import { LoginComponent } from './container/login/login.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { LogsComponent } from './container/logs/logs.component';
import { FileuploadComponent } from './container/fileupload/fileupload.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'logs', component: LogsComponent },
      { path: 'file_upload', component: FileuploadComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
