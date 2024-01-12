import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichMakerComponent } from './sandwich-maker.component';

describe('SandwichMakerComponent', () => {
  let component: SandwichMakerComponent;
  let fixture: ComponentFixture<SandwichMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandwichMakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandwichMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
