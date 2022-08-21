import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { C_project } from '../project/project.model';
import { ProjectService } from '../services/project.service'

@Component({
  selector: 'app-list-of-projects',
  templateUrl: './list-of-projects.component.html',
  styleUrls: ['./list-of-projects.component.scss']
})
export class ListOfProjectsComponent implements OnInit {
myListOfProjects: any[] = []
  constructor(private serv: ProjectService) { }

  ngOnInit(): void {
    this.serv.projectList$.subscribe(proj => this.myListOfProjects.push(proj))
    console.log(this.myListOfProjects)
    
  }

}
