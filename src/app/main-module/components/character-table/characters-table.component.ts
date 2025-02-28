import { Component } from '@angular/core';
import { StarWarsService } from '../../../services/star-wars.service';
import { IPerson } from '../../../interfaces';

const PEOPLE_NUM = 15;

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrl: './characters-table.component.scss',
  standalone: false,
})
export class CharactersTableComponent {
  private people: IPerson[] = [];

  constructor(private starWarsService: StarWarsService) {
    this.starWarsService.getPeople().subscribe((people) => {
      for (let i = 0; i < PEOPLE_NUM; i++) {
        const randomIndex = Math.floor(Math.random() * people.length);
        this.people.push(people[randomIndex]);
        people.splice(randomIndex, 1);
      }
    });
  }
  

}