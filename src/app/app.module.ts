import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginInComponent } from './loggin-in/loggin-in.component';
import { SingleProjComponent } from './single-proj/single-proj.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import { ProjectFormComponent } from './project-form/project-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { ListOfProjectsComponent } from './list-of-projects/list-of-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginInComponent,
    SingleProjComponent,
    HomePageComponent,
    ProjectFormComponent,
    ListOfProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
