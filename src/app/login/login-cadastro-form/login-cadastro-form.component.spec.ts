import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCadastroFormComponent } from './login-cadastro-form.component';

describe('LoginCadastroFormComponent', () => {
  let component: LoginCadastroFormComponent;
  let fixture: ComponentFixture<LoginCadastroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCadastroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCadastroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
