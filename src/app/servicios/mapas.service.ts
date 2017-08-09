import { Injectable } from '@angular/core';
import {Marcador} from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {

    marcadores: Marcador[] = [];

  constructor() {
  }

  agregarMarcador ( marcadorNuevo: Marcador) {
      this.marcadores.push(marcadorNuevo);
      this.persistirMarcadores();
  }

  persistirMarcadores() {
      localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  recuperarMarcadores() {
      if (localStorage.getItem('marcadores')) {
          this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
      } else {
          this.marcadores = [];
      }
  }

  borrarMarcador(index) {
      this.marcadores.splice(index, 1);
      this.persistirMarcadores();
  }
}
