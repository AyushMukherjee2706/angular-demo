import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {

  public files: any[]
  constructor(private fileService: FilesService) { }

  ngOnInit() {
    this.fileService.getAllFiles().subscribe(files => this.files = files)
  }

}
