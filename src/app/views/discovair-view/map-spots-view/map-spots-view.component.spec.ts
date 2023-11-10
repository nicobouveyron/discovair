import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSpotsViewComponent } from './map-spots-view.component';

describe('MapSpotsViewComponent', () => {
  let component: MapSpotsViewComponent;
  let fixture: ComponentFixture<MapSpotsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSpotsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapSpotsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
