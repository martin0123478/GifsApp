import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../servicios/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private service:GifsService) { }

  ngOnInit(): void {
  }
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    this.service.buscarGgifs(valor)
    this.txtBuscar.nativeElement.value = '';
  }
}
