import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { C_project } from '../project/project.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Observable } from 'rxjs';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
export interface Worker{
  name: string;
}

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  projList: FormGroup;
  categoryCtrl =  new FormControl();
  filteredCategories: Observable<string[]>
  categories: string[] = []
  // desc: string
  // prior: string
  allCategories: string[] = ['Finanse', 'Planowanie', 'Marketing'];
  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  constructor(private fb: FormBuilder, private serv: ProjectService, private route: Router) { this.filteredCategories = this.categoryCtrl.valueChanges.pipe(startWith(null),
    map((category: string | null) => (category ? this._filter(category) : this.allCategories.slice())),) }
  addOnBlur = true;
  workers: Worker[] = []
  readonly separatorKeysCodes = [ENTER, COMMA] as const;



// First chips  

add(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();
  if (value) {
    this.workers.push({name: value});
  }
  event.chipInput!.clear();
}
remove(worker: Worker): void{
  const index = this.workers.indexOf(worker);
  if (index >= 0){
    this.workers.splice(index, 1)
  }
}



// Sec chips
addCat(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();
  if (value) {
    this.categories.push(value);
  }
  event.chipInput!.clear();
  this.categoryCtrl.setValue(null);
}
removeCat(category: string): void {
  const index = this.categories.indexOf(category);
  if (index >= 0) {
    this.categories.splice(index, 1);
  }
}
selected(event: MatAutocompleteSelectedEvent): void {
  this.categories.push(event.option.viewValue);
  this.categoryInput.nativeElement.value = '';
  this.categoryCtrl.setValue(null);
}
private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.allCategories.filter(fruit => fruit.toLowerCase().includes(filterValue));
}



  ngOnInit(): void {
    this.projList = this.fb.group({
      projName: new FormControl(),
      workers: new FormControl(),
      desc: new FormControl(),
      prior: new FormControl(),
      categories: new FormControl()


    })
  }
onSubmit(){
const newProject: C_project = {
  name: this.projList.get('projName')?.value,
  workers: this.workers,
  description: this.projList.get('desc')?.value,
  categories: this.categories,
  priority: this.projList.get('prior')?.value,
}
console.log(newProject)
this.serv.addProject(newProject)
this.workers = []
this.categories = []
this.projList.reset()
console.log(this.serv.projectList$)
this.route.navigate(['/list'])
}



}
