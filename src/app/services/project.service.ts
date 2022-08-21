import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { C_project } from '../project/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
projectList$: Observable<C_project[]>
myProjList: any[] = []

mySubj_ = new Subject<C_project[]>();
constructor(){this.projectList$ = this.mySubj_.asObservable();}


addProject(project: any){
  // this.projectList$.pipe(proj =>)
  this.myProjList.push(project)
  this.mySubj_.next(this.myProjList)
  console.log(this.myProjList)
}

}
