import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ObjectType} from "./entity/objectType";

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('http://127.0.0.1:8080/database-service/objectType/all')
  }

  postData(objectType: ObjectType) {
      const body = {parentId: objectType.parentId, name: objectType.name};
      return this.http.post('http://127.0.0.1:8080/database-service/objectType/create', body)
  }

}
