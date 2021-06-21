import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('http://127.0.0.1:8080/database-service/objectType/all')
  }
}
