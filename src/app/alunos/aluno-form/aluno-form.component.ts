import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit, OnDestroy {
  aluno: any = {};
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    this.aluno = history.state.data;

    if (!this.aluno) {
      this.inscricao = this.route.params.subscribe((params) => {
        const id = parseInt(params['id']);
        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === undefined) {
          this.aluno = {};
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
