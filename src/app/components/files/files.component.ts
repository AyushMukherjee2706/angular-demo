import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  data: [][];  

  constructor(private fileService: FilesService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.item(0))
  }


  upload() {
  
    this.currentFile = this.selectedFiles.item(0);
    // this.fileService.upload(this.currentFile).subscribe(
      
    //   err => {
    //     console.log('error')
    //     this.progress = 0;
    //     this.message = 'Could not upload the file!';
    //     this.currentFile = undefined;
    //   });
    
    this.fileService.sendData({"data":this.data})
    // this.fileService.test();
    this.selectedFiles = undefined;
  }

  onFileChange(evt: any) {
    const target : DataTransfer =  <DataTransfer>(evt.target);
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    this.selectFile(evt)
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      console.log(this.data);

      let x = this.data.slice(1);
      console.log(x);      

    };

    reader.readAsBinaryString(target.files[0]);

  }
}
