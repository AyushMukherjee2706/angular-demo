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
  selectedCity: any;

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
                        console.log("Thsi is what: "+this.collected_data['tower'])
    this.projectService.getResult(this.collected_data)
    console.log(this.selectedTowers);
    console.log(this.selectedModules);
    console.log(this.selectedResources);
    console.log(this.selectedPractitioners);
  }
}
