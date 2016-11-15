import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'listening',
    templateUrl: 'listening.component.html'
})
export class ListeningComponent {
    name: string = "Listening";
    param: string;

    constructor() {
    }
}