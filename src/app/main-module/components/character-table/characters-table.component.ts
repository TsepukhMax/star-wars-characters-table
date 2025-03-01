import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../../services/star-wars.service';
import { IPerson } from '../../../interfaces';

const PEOPLE_NUM = 15;

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrl: './characters-table.component.scss',
  standalone: false,
})
export class CharactersTableComponent implements OnInit {
  public people: IPerson[] = [];

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    const cachedPeople = localStorage.getItem('people');
    
    if (cachedPeople) {
      // If we have cached data, we use it
      this.people = JSON.parse(cachedPeople);
    } else {
      // If no cached data, we get it from the server
      this.starWarsService.getPeople().subscribe((people) => {
        // random
        const selectedPeople = [];
        for (let i = 0; i < PEOPLE_NUM; i++) {
          const randomIndex = Math.floor(Math.random() * people.length);
          selectedPeople.push(people[randomIndex]);
          people.splice(randomIndex, 1);
        }
      });
    }
  }
}