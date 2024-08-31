import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCalculatorComponent } from './check-calculator.component';

describe('CheckCalculatorComponent', () => {
  let component: CheckCalculatorComponent;
  let fixture: ComponentFixture<CheckCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
