import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrangeComponent } from './password-strange.component';

describe('PasswordStrangeComponent', () => {
  let component: PasswordStrangeComponent;
  let fixture: ComponentFixture<PasswordStrangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordStrangeComponent]
    });
    fixture = TestBed.createComponent(PasswordStrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
