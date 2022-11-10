import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

const routes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      {
        path: 'novo',
        component: AlunoFormComponent,
      },
      {
        path: ':id',
        component: AlunoDetalheComponent,
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
