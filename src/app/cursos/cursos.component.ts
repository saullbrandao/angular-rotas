import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: any[] = [];
  pagina: number = 1;
  inscricao: Subscription = new Subscription();

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  proximaPagina() {
    this.router.navigate(['/cursos'], {
      queryParams: {
        pagina: ++this.pagina,
      },
    });
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
