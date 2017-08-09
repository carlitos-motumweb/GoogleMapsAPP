import { Component } from '@angular/core';
import { MapasService } from './servicios/mapas.service';
import { Marcador} from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Marcadores';
    lugar: string = 'Parque Boomerang';
    lat: number = 18.8601938;
    lng: number = -97.1115161;
    zoom: number = 17;

    marcadorSeleccionado: any = null;


    constructor( private _ms: MapasService) {
        this._ms.recuperarMarcadores();
    }

    agregarMarcador(evento) {
        console.log('se agrega un marcador');
        console.log(evento);
        let nuevoMarcador = {
            latitud: evento.coords.lat,
            longitud: evento.coords.lng,
            titulo: 'Sin titulo',
            draggable: true
        }
        this._ms.agregarMarcador(nuevoMarcador);
    }

    clickMarcador (marcador: Marcador, i) {
        console.log('Click en marcador')
        this.marcadorSeleccionado = marcador;
    }

    dragEndMarcador(marcador: Marcador, evento){
        console.log('Se ha arrastrado el marcador')
        console.log(marcador);
        console.log(evento);
        let lat = evento.coords.lat;
        let lng = evento.coords.lng;
        marcador.latitud = lat;
        marcador.longitud = lng;
        this._ms.persistirMarcadores();
    }

    eliminarMarcador(indice){
        this._ms.borrarMarcador(indice);
        this.marcadorSeleccionado = null;
    }
}
