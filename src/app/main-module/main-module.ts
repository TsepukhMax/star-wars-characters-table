import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';

import { StarWarsComponent } from "./components/star-wars/star-wars.component";
import { CharactersTableComponent } from "./components/character-table/characters-table.component";
import { CharacterSearchComponent } from "./components/character-search/character-search.component";
import { PlanetPopoverComponent } from "./components/planet-popover/planet-popover.component";

@NgModule({
  declarations: [ 
    StarWarsComponent,
    CharactersTableComponent,
    CharacterSearchComponent,
    PlanetPopoverComponent,
  ],
  imports: [
    MatTableModule,
  ],
  exports: [
    StarWarsComponent,
  ],
})

export class MainModule {}