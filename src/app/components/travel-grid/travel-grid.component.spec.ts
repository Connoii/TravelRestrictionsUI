import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGridComponent } from './travel-grid.component';

describe('TravelGridComponent', () => {
  let component: TravelGridComponent;
  let fixture: ComponentFixture<TravelGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
