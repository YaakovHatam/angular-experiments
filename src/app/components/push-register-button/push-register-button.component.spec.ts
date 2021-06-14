import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushRegisterButtonComponent } from './push-register-button.component';

describe('PushRegisterButtonComponent', () => {
  let component: PushRegisterButtonComponent;
  let fixture: ComponentFixture<PushRegisterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushRegisterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushRegisterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
