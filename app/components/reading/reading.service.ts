import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReadingService{

  constructor(private http: Http) {
      console.log('Init Reading Service....')
   }

  getQuestions(){
    return this.http.get('http://localhost:3000/api/reading')
      .map(res => res.json());
  }
}