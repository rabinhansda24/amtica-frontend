import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HelperService} from './helper.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private http: HttpClient, private helperService: HelperService) { }

  getFiles() {
    const options = this.helperService.getHttpGetOptions();
    return this.http.get(environment.apiHost + '/file/files', options)
  }

}
