import { Component, OnInit } from "@angular/core";
import { FilesService } from "src/app/services/files.service";
import { ExcelDataModel } from "src/app/models/excel-data-model";
import * as XLSX from "xlsx";

@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.css"],
})
export class FilesComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  isUpload: boolean = false;
  data: [][];
  data_to_send: Array<ExcelDataModel> = [];

  constructor(private fileService: FilesService) {}

  ngOnInit() {}

  selectFile(event) {
    this.isUpload = false
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.item(0));
  }

  upload() {
    // this.currentFile = this.selectedFiles.item(0);

    console.log("data_to_send check: " + this.data_to_send)
    this.fileService.sendData( this.data_to_send );
    this.selectedFiles = null;
    this.data = null;
    this.isUpload = true
  };

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>evt.target;

    if (target.files.length !== 1) throw new Error("Cannot use multiple files");

    this.selectFile(evt);
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });


      var j = 0;
      for (let i = 1; i < this.data.length; i++) {        
        let people: ExcelDataModel = new ExcelDataModel(this.data[i][j], this.data[i][j + 1], this.data[i][j + 2], this.data[i][j + 3], this.data[i][j + 4], this.data[i][j + 5], this.data[i][j + 6], this.data[i][j + 7])
        console.log("testing prople : "+ people)
        this.data_to_send.push(people)
        };        

      let x = this.data.slice(1);
      console.log(x);
    };

    reader.readAsBinaryString(target.files[0]);
  }
}
