import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista.component';

describe('CadastroPessoaListaComponent', () => {
  let component: CadastroPessoaListaComponent;
  let fixture: ComponentFixture<CadastroPessoaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPessoaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
