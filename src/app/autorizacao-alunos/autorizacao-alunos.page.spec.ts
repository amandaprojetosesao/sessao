import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacaoAlunosPage } from './autorizacao-alunos.page';

describe('AutorizacaoAlunosPage', () => {
  let component: AutorizacaoAlunosPage;
  let fixture: ComponentFixture<AutorizacaoAlunosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizacaoAlunosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacaoAlunosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
