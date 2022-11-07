import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  getCursos() {
    return [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'Java' },
    ];
  }

  getCurso(id: number) {
    return this.getCursos().find((curso) => curso.id == id);
  }
  constructor() {}
}
