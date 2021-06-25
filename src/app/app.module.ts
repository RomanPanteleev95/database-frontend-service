import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './components/app.component';
import { HttpClientModule }   from '@angular/common/http';
import {Routes, RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import { ObjectTypeListComponent } from './components/object-type-list/object-type-list.component';
import { CreateObjectTypeComponent } from './components/create-object-type/create-object-type.component';

const appRoutes: Routes = [
  {path: "objectTypes", component: ObjectTypeListComponent},
  {path: "createObjectType", component: CreateObjectTypeComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ObjectTypeListComponent,
    CreateObjectTypeComponent],
  bootstrap:    [ AppComponent ],
  providers: []

})
export class AppModule { }
