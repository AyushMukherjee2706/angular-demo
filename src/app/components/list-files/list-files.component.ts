import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { ExcelDataModel } from "src/app/models/excel-data-model";

@Component({
  selector: "app-list-files",
  templateUrl: "./list-files.component.html",
  styleUrls: ["./list-files.component.css"],
})
export class ListFilesComponent {
  records: ExcelDataModel[];
  tower: any[];
  module: any[];
  resource: any[];
  practitioner: any[];
  location: any[];
  collected_data: any
  filtered_result: ExcelDataModel[]
  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadRecord();    
  }

  loadRecord() {
    this.projectService.getAllRecords().subscribe((records) => {
      this.practitioner = records.map((val) => {        
        return {name:val['practitionerName']}
      });

      this.tower = records.map((val) => {
        return {name:val['tower']}
      });

      this.module = records.map((val) => {
        return {name:val['module']}
      });

      this.resource = records.map((val) => {
        return {name:val['typeOfResource']}
      });
      
      this.location = records.map((val) => {
        return {name:val['location']}
      });

    });
  }
  
  selectedTowers: string[];
  selectedModules: string[];
  selectedResources: string[];
  selectedPractitioners: string[];
  selectedLocations: string[];
  

  testmulti() {

    this.collected_data = {tower: this.selectedTowers,
                          module: this.selectedModules,
                          resource: this.selectedResources,
                          practitioner:this.selectedPractitioners,
                        location: this.selectedLocations}
                        console.log("This is what: "+this.collected_data['tower'])
                        this.projectService.getResult(this.collected_data).subscribe(res => this.filtered_result = res)
    console.log(this.selectedTowers);
    console.log(this.selectedModules);
    console.log(this.selectedResources);
    console.log(this.selectedPractitioners);
  }
}
// this.collected data is the req body sent by front end
//this.filtered is giving the filtered response to front end