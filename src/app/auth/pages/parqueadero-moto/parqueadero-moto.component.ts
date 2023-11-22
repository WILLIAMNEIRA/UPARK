import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'parqueadero-moto',
  templateUrl: './parqueadero-moto.component.html',
  styleUrls: ['./parqueadero-moto.component.css'],
})
export class ParqueaderoMotoComponent {
  sidenav = [
    { name: 'Bloque Aulas', route: '/auth/bloqueAulasMotos' },
    { name: 'Casona', route: '/auth/casonaMotos' },
    { name: 'Laboratorios', route: '/auth/laboratoriosMotos' },
    { name: 'Bienestar', route: '/auth/bienestarMotos' },
   
   
  ];
}
