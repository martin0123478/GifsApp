import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/servicios/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private service:GifsService) { 
   
  }

  ngOnInit(): void {
  }
  get historial(){
    return this.service.historial;
  }
  buscar(termino:string){
    console.log(termino)
    this.service.buscarGgifs(termino)
  }

}
