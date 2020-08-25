import { Component, OnInit, VERSION } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  ngVersion: string = VERSION.full;
  heroes: Hero[] = [];
  matVersion: string = '5.1.0';
  breakpoint: number;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }



  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 7));
      
  }


  onResize(event: { target: { innerWidth: number; }; }) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

  
}