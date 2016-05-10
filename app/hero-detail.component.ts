import {Component,Input, OnInit } from '@angular/core';
import {Hero} from './hero';
import {RouteParams} from '@angular/router-deprecated';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
	@Input() hero: Hero;

	constructor(private heroService: HeroService, private routeParams: RouteParams){}

	ngOnInit(){
		console.log("first step");
		let id = +this.routeParams.get('id')
		console.log(id);
		this.heroService.getHero(id).then(hero => this.hero = hero);

	}

	goBack(){
		window.history.back();	
	}

}
}