import { Component, Input } from '@angular/core';
import { IPerson, IPlanet } from '../../../interfaces';
import { StarWarsService } from '../../../services/star-wars.service';

const MIN_WINDOW_WIDTH = 1024;

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss'],
  standalone: false,
})
export class CharactersTableComponent {
  selectedPlanet: IPlanet;
  topCoordinate: number = 0;
  @Input() people: IPerson[] = [];
  selectedPerson: IPerson;


  constructor(private starWarsService: StarWarsService) {}
  
  requestPlanet(person: IPerson, event:Event): void {
    if(person.homeworldUrl !== this.selectedPlanet?.url){
      const coord = (event.currentTarget as HTMLElement)?.offsetTop;
      const height = (event.currentTarget as HTMLElement)?.offsetHeight * 0.67;
      this.starWarsService.getPlanet(person.homeworldUrl).subscribe((planet) => {
        const screenWidth = window.innerWidth;
        this.topCoordinate = screenWidth < MIN_WINDOW_WIDTH ? coord + height : coord;
        this.selectedPlanet = planet;
        this.selectedPerson = person;
      })
    }
    this.selectedPlanet = null;
    this.selectedPerson = null;
  }
}
