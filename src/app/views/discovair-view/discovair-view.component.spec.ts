import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscovairViewComponent } from './discovair-view.component';

describe('DiscovairViewComponent', () => {
  let component: DiscovairViewComponent;
  let fixture: ComponentFixture<DiscovairViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscovairViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscovairViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
