import { Component, OnInit } from '@angular/core';
import {ObjectType} from "../../entity/objectType";
import {HttpService} from "../../http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-object-type-list',
  templateUrl: './object-type-list.component.html',
  styleUrls: ['./object-type-list.component.css'],
  providers: [HttpService]
})
export class ObjectTypeListComponent implements OnInit {
  objectTypes: ObjectType[] = [];
  constructor(private httpService: HttpService, private router: Router){}

  ngOnInit(){
    this.httpService.getData().subscribe((data:any) =>
      this.objectTypes=data, error => {console.log('errr')});
  }

  async delayReload() {
    console.log("Before sleep: " + new Date().toString());
    await this.delays(300);
    this.reloadComponent();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate([currentUrl]);
  }

  delays(ms: number) {
    return new Promise( (resolve) => {setTimeout(resolve, ms)});
  }
}
