import {Component, OnChanges, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService} from './http.service';
import {ObjectType} from './entity/objectType';

@Component({
  selector: 'purchase-app',
  template: `
    <div class="form-group">
      <label>Parent Id</label>
      <input class="form-control" name="username" [(ngModel)]="objectType.parentId" />
    </div>
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" type="text" name="age" [(ngModel)]="objectType.name" />
    </div>
    <div class="form-group">
      <button class="btn btn-default" (click)="submit(objectType);">Отправить</button>
    </div>
    <ul>
    <li *ngFor="let objectType of objectTypes">
      <p>{{objectType?.objectTypeId}}</p>
      <p>{{objectType?.name}}</p>
      <p>{{objectType?.description}}</p>
    </li>
  </ul>`,
  providers: [HttpService]
})
export class AppComponent implements OnInit, OnChanges {

  objectTypes: ObjectType[] = [];

  objectType: ObjectType = new ObjectType(0, "");

  constructor(private httpService: HttpService){}

  submit(objectType: ObjectType){
    this.httpService.postData(objectType)
      .subscribe(
        (data: any) => console.log(data),
        error => console.log(error)
      );
  }

  ngOnInit(){

    this.httpService.getData().subscribe((data:any) =>
      this.objectTypes=data, error => {console.log('errr')});
  }

  ngOnChanges() {

  }
}
