import { TestBed } from '@angular/core/testing';

import { AlunoDetalheResolver } from './aluno-detalhe.resolver';

describe('AlunoDetalheResolver', () => {
  let resolver: AlunoDetalheResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlunoDetalheResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
