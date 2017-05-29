import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaFormComponent } from './cadastro-pessoa-form.component';

describe('CadastroPessoaFormComponent', () => {
  let component: CadastroPessoaFormComponent;
  let fixture: ComponentFixture<CadastroPessoaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPessoaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
