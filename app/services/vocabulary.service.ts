import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Vocabulary } from '../Vocabulary';

@Injectable()
export class VocabularyService {
	constructor(private http:Http){
		console.log('Init...');
	}

	getAllVoca(){
		return this.http.get('http://localhost:3000/vocabulary')
			.map(res => res.json());
	}

	addVoca(newVoca){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:3000/vocabulary/create', JSON.stringify(newVoca), {headers: headers})
			.map(res => res.json());
	}

	deleteVoca(id: String){
		return this.http.delete('/vocabulary/' + id)
			.map(res => res.json());
	}

}
