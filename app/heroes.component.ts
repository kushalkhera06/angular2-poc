import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit { 
   heroes: Hero[] = [];
   selectedHero: Hero;

   constructor( 
     private router: Router,
         private heroService: HeroService) {
}


  getHeroes(){
    console.log("asdasd");
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

ngOnInit(){
console.log("asdaaaaasd");
   this.getHeroes();
   }

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

gotoDetail() {
  console.log("click");
  console.log("backwards " + this.selectedHero.id);
  this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

	
}

