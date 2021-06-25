import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {ObjectType} from "../../entity/objectType";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-object-type',
  templateUrl: './create-object-type.component.html',
  styleUrls: ['./create-object-type.component.css'],
  providers: [HttpService]
})
export class CreateObjectTypeComponent {

  objectType: ObjectType = new ObjectType(0, "");

  constructor(private httpService: HttpService, private router: Router){}
  submit(objectType: ObjectType){
    this.httpService.postData(objectType)
      .subscribe();
  }
}
