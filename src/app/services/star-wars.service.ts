import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPerson, IPersonResponse, IPlanet } from '../interfaces';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private peopleUrl = "https://swapi.info/api/people";

  constructor(private httpClient: HttpClient) {}

  getPeople(): Observable<IPerson[]> {
    return this.httpClient.get<IPersonResponse[]>(this.peopleUrl).pipe(map((peopleResponse) => {
      return peopleResponse.map((personResponse, index) => { 
        return {
          id: index,
          characterName: personResponse.name,
          gender: personResponse.gender,
          birthYear: personResponse.birth_year,
          homeworldUrl: personResponse.homeworld,
        };
      });
    }));
  }

  getPlanet(planetUrl: string): Observable<IPlanet> {
    return this.httpClient.get<IPlanet>(planetUrl);
  }
}