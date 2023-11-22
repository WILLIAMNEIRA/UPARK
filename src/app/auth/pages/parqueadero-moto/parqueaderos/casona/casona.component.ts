import { Component } from '@angular/core';

@Component({
  templateUrl: './casona.component.html',
  styleUrls: ['./casona.component.css']
})
export class CasonaComponent {
  puestos = [
    { name: '1° Puesto', active: false },
    { name: '2° Puesto', active: true },
    { name: '3° Puesto', active: true },
    { name: '4° Puesto', active: false },
    { name: '5° Puesto', active: true },
    { name: '6° Puesto', active: false },
    { name: '7° Puesto', active: true },
   
  ];
}
