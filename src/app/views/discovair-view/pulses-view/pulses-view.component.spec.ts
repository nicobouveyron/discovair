import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsesViewComponent } from './pulses-view.component';

describe('PulsesViewComponent', () => {
  let component: PulsesViewComponent;
  let fixture: ComponentFixture<PulsesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulsesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PulsesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
