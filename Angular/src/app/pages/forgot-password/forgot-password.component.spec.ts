import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgorPasswordComponent } from './forgot-password.component';

describe('ForgorPasswordComponent', () => {
  let component: ForgorPasswordComponent;
  let fixture: ComponentFixture<ForgorPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgorPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
