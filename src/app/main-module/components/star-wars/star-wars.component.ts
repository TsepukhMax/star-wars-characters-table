import { Component } from '@angular/core';
import { StarWarsService } from '../../../services/star-wars.service';
import { IPerson } from '../../../interfaces';

const PEOPLE_NUM = 15;

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrl: './star-wars.component.scss',
  standalone: false
})
export class StarWarsComponent {
  public people: IPerson[] = [];
  public filteredPeople: IPerson[] = [];

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.starWarsService.getPeople().subscribe((people) => {
      const selectedPeople = [];
      for (let i = 0; i < PEOPLE_NUM; i++) {
        const randomIndex = Math.floor(Math.random() * people.length);
        selectedPeople.push(people[randomIndex]);
        people.splice(randomIndex, 1);
      }
      this.people = selectedPeople;
      this.filteredPeople = [...this.people];
    });
  }

  onSearchTermChanged(searchTerm: string): void {
    searchTerm = searchTerm?.toUpperCase();
    if(searchTerm){
      this.filteredPeople = this.people.filter((person) =>{
        return person.characterName.toUpperCase().includes(searchTerm);
      })
    } else {
      this.filteredPeople = [...this.people];
    }
  }
}
