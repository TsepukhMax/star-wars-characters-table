import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetPopoverComponent } from './planet-popover.component';

describe('PlanetPopoverComponent', () => {
  let component: PlanetPopoverComponent;
  let fixture: ComponentFixture<PlanetPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetPopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});