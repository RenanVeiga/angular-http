import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsenhaComponent } from './loginsenha.component';

describe('LoginsenhaComponent', () => {
  let component: LoginsenhaComponent;
  let fixture: ComponentFixture<LoginsenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
