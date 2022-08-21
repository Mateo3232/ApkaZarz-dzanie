import { Component, Input, OnInit } from '@angular/core';
import { C_project } from '../project/project.model';

@Component({
  selector: 'app-single-proj',
  templateUrl: './single-proj.component.html',
  styleUrls: ['./single-proj.component.scss']
})
export class SingleProjComponent implements OnInit {

  constructor() { }
@Input() projDetails?: C_project
  ngOnInit(): void {
  }

}
