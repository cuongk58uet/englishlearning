import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'my-about',
    templateUrl: 'about.component.html',
})
export class AboutComponent {
    name: string = "About Us";
    param: string;

    constructor(private params: ActivatedRoute) {
        params.params
            .subscribe((data: { id?: string}) => this.param = data.id);
    }
}