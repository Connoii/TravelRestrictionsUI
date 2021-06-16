import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelGridComponent } from './travel-grid.component';
import { HttpClientModule } from '@angular/common/http';
describe('TravelGridComponent', () => {
  let component: TravelGridComponent;
  let fixture: ComponentFixture<TravelGridComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelGridComponent ],
      imports: [ HttpClientModule ]
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
  it('should display a table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.table')).toBeTruthy();
  })
});