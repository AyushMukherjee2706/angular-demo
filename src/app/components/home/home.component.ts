import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public projects:  any[];

  constructor(private projectService: ProjectService) { 
    
  }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(projects => this.projects = projects)
    console.log("What to do " + this.projects)
  }

}
