import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css'],
})
export class RegistrarVehiculoComponent {
  public datos = [
    {
      id: 1,
      nombre: 'XPG32',
      descripcion: 'MOTOCICLETA',
      parqueadero: 'Bloque Aulas',
      puesto: '22',
      estado: 'Disponible',
      state: 'true',
    },
    {
      id: 2,
      nombre: 'DEF012',
      descripcion: 'AUTOMOVIL ',
      parqueadero: 'Casona',
      puesto: '7',
      estado: 'Disponible',
      state: 'true',
    },
    {
      id: 3,
      nombre: 'ABC456',
      descripcion: 'MOTOCICLETA',
      parqueadero: 'Laboratorios',
      puesto: '22',
      estado: 'Ocupado',
      state: 'true',
    },
    {
      id: 4,
      nombre: 'DEF012',
      descripcion: 'MOTOCICLETA',
      parqueadero: 'Casona',
      puesto: '2',
      estado: 'Disponible',
      state: 'true',
    },
    {
      id: 5,
      nombre: 'ZAB210',
      descripcion: 'MOTOCICLETA',
      parqueadero: 'Bienestar',
      puesto: '10',
      estado: 'Ocupado',
      state: 'true',
    },
    {
      id: 6,
      nombre: 'PQS654',
      descripcion: 'AUTOMOVIL',
      parqueadero: 'Casona',
      puesto: '6',
      estado: 'Disponible',
      state: 'true',
    },
    {
      id: 7,
      nombre: 'GHI345',
      descripcion: 'MOTOCICLETA',
      parqueadero: 'Bienestar',
      puesto: '1',
      estado: 'Ocupado',
      state: 'true',
    },
    {
      id: 8,
      nombre: 'UVW321',
      descripcion: 'AUTOMOVIL',
      parqueadero: 'Casona',
      puesto: '3',
      estado: 'Disponible',
      state: 'true',
    },
    {
      id: 9,
      nombre: 'JKL678',
      descripcion: 'MOTOCICLETA',
      parqueadero: 'Bloque Aulas',
      puesto: '10',
      estado: 'Disponible',
      state: 'true',
    },
    {
      id: 10,
      nombre: 'MNO987',
      descripcion: 'AUTOMOVIL',
      parqueadero: 'Laboratorios',
      puesto: '497',
      estado: 'Ocupado',
      state: 'true',
    },
  ];
}
