import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileuploadService } from '../../services/fileupload.service';
import { environment } from '../../../environments/environment';


const uri = environment.apiHost + '/file/upload';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  uploader: FileUploader = new FileUploader({url: uri, authToken: sessionStorage.getItem('token')});

  attachmentList: any = [];
  files: any = [];

  constructor(private fileService: FileuploadService) {
    this.uploader.onCompleteItem = (item: any, response: any , status: any, headers: any) => {
      const res = JSON.parse(response)
      this.attachmentList.push(res.data);
      console.log(this.attachmentList);
      this.getFiles();
    };
  }

  ngOnInit() {
    this.getFiles();
  }
  getFiles() {
    this.fileService.getFiles().subscribe(res => {
      const result = JSON.parse(JSON.stringify(res));
      this.files = result.data.files;
      console.log(this.files);
    });
  }

}
