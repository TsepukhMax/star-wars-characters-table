export interface IPerson {
  id: number;
  characterName: string;
  gender: string;
  birthYear: string;
  homeworldUrl: string;
}

export interface IPersonResponse {
  name: string;
  gender: string;
  birth_year: string;
  homeworld: string;
}

export interface IPlanet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  url: string;
}