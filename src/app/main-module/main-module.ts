import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";

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
    MatIconModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
  ],
  exports: [
    StarWarsComponent,
  ],
})

export class MainModule {}