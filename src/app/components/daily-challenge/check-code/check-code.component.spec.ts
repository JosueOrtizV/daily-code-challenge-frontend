import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCodeComponent } from './check-code.component';

describe('CheckCodeComponent', () => {
  let component: CheckCodeComponent;
  let fixture: ComponentFixture<CheckCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
