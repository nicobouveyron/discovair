import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrMapComponent } from './dr-map.component';

describe('DrMapComponent', () => {
  let component: DrMapComponent;
  let fixture: ComponentFixture<DrMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrMapComponent]
    });
    fixture = TestBed.createComponent(DrMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
