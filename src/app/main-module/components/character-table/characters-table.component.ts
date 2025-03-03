import { Component, Input } from '@angular/core';
import { IPerson, IPlanet } from '../../../interfaces';
import { StarWarsService } from '../../../services/star-wars.service';

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

  constructor(private starWarsService: StarWarsService) {}
  
  requestPlanet(person: IPerson, event:Event): void {
    if(person.homeworldUrl !== this.selectedPlanet?.url){
      const coord = (event.currentTarget as HTMLElement)?.offsetTop;
      this.starWarsService.getPlanet(person.homeworldUrl).subscribe((planet) => {
        this.selectedPlanet = planet;
        this.topCoordinate = coord;
      })
    }
    this.selectedPlanet = null;
  }
}
