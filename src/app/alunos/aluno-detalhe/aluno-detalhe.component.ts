import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any = {};
  inscricao: Subscription = new Subscription();

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'], {
      state: { data: this.aluno },
    });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params) => {
      const id = parseInt(params['id']);

      this.aluno = this.alunosService.getAluno(id);
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
