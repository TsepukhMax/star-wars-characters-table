import { Component, Input } from '@angular/core';
import { IPlanet } from '../../../interfaces';

@Component({
  selector: 'app-planet-popover',
  templateUrl: './planet-popover.component.html',
  styleUrl: './planet-popover.component.scss',
  standalone: false,
})
export class PlanetPopoverComponent {
  @Input() planet!: IPlanet;
}