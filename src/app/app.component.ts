import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService} from './http.service';
import {ObjectType} from './objectType';

@Component({
  selector: 'purchase-app',
  template: `<ul>
    <li *ngFor="let objectType of objectTypes">
      <p>{{objectType?.objectTypeId}}</p>
      <p>{{objectType?.name}}</p>
      <p>{{objectType?.description}}</p>
    </li>
  </ul>`,
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  objectTypes: ObjectType[] = [];

  constructor(private httpService: HttpService){}

  ngOnInit(){

    this.httpService.getData().subscribe((data:any) =>
      this.objectTypes=data, error => {console.log('errr')});
}
}
