import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SandwhichDisplayComponent } from './sandwhich-display.component';

describe('SandwhichDisplayComponent', () => {
  let component: SandwhichDisplayComponent;
  let fixture: ComponentFixture<SandwhichDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandwhichDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandwhichDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
