import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno!: Aluno;
  inscricao: Subscription = new Subscription();

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'], {
      state: { data: this.aluno },
    });
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe((data) => {
      this.aluno = data['aluno'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
