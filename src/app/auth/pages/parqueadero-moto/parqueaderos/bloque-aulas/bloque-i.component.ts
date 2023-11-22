import { Component } from '@angular/core';

@Component({
  selector: 'app-bloque-i',
  templateUrl: './bloque-i.component.html',
  styleUrls: ['./bloque-i.component.css'],
})
export class BloqueIComponent {
  puestos = [
    { name: '1° Puesto', active: false },
    { name: '2° Puesto', active: true },
    { name: '3° Puesto', active: true },
    { name: '4° Puesto', active: false },
    { name: '5° Puesto', active: true },
    { name: '6° Puesto', active: false },
    { name: '7° Puesto', active: true },
    { name: '8° Puesto', active: false },
    { name: '9° Puesto', active: true },
    { name: '10° Puesto', active: true },
    { name: '11° Puesto', active: false },
    { name: '12° Puesto', active: true },
  ];
  puestosList = [
    { name: '13° Puesto', active: false },
    { name: '14° Puesto', active: false },
    { name: '15° Puesto', active: true },
    { name: '16° Puesto', active: false },
    { name: '17° Puesto', active: false },
    { name: '18° Puesto', active: false },
    { name: '19° Puesto', active: true },
    { name: '20° Puesto', active: false },
    { name: '21° Puesto', active: true },
    { name: '22° Puesto', active: false },
    { name: '23° Puesto', active: false },
    { name: '24° Puesto', active: true },
  ];
}
