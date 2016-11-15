import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-about',
    templateUrl: 'components/about/about.component.html',
})
export class AboutComponent {
    name: string = "About Us";
    param: string;

    constructor(private params: ActivatedRoute) {
        params.params
            .subscribe((data: { id?: string}) => this.param = data.id);
    }
}