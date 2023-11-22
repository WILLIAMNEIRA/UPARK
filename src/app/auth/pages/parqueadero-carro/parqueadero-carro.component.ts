import { Component } from '@angular/core';

@Component({
  selector: 'app-parqueadero-carro',
  templateUrl: './parqueadero-carro.component.html',
  styleUrls: ['./parqueadero-carro.component.css']
})
export class ParqueaderoCarroComponent {
  sidenav = [
    { name: 'Bloque Aulas', route: '/auth/bloqueAulasCarro' },
    { name: 'Casona', route: '/auth/casonaCarro' },
    { name: 'Laboratorios', route: '/auth/laboratoriosCarro' },
    { name: 'Bienestar', route: '/auth/bienestarCarro' },
    { name: 'Anexos', route: '/auth/anexosCarro' },
   
   
  ];
}
