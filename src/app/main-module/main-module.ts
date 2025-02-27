import { NgModule } from "@angular/core";
import { CharactersTableComponent } from "./components/character-table/characters-table.component";
import { CharacterSearchComponent } from "./components/character-search/character-search.component";
import { PlanetPopoverComponent } from "./components/planet-popover/planet-popover.component";

@NgModule({
  declarations: [ 
    CharactersTableComponent,
    CharacterSearchComponent,
    PlanetPopoverComponent
  ],
  exports: [
    CharactersTableComponent,
  ],
})

export class MainModule {}