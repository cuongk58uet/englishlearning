import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  providers: []
})

export class DashboardComponent implements OnInit{
	constructor(
    private router: Router
  ) { }
	ngOnInit(): void{

	}

	gotoVocabulary(): void{
		this.router.navigateByUrl('/vocabulary');
	}

	gotoListening(): void{
		let link = ['/listening'];
		this.router.navigate(link);
	}

	gotoReading(): void{
		let link = ['/reading'];
		this.router.navigate(link);
	}

	gotoWriting(): void{
		let link = ['/writing'];
		this.router.navigate(link);
	}
 }
