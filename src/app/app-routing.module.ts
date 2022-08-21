import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';
import { HomePageComponent } from './home-page/home-page.component';
import { ListOfProjectsComponent } from './list-of-projects/list-of-projects.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { SingleProjComponent } from './single-proj/single-proj.component';


const routes: Routes = [ {path:"", pathMatch: "full", redirectTo: "home"},
{path: "home", component: HomePageComponent},
{path: 'CreateProject', component: ProjectFormComponent},
{path: 'single', component: SingleProjComponent},
{path: 'list', component: ListOfProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
