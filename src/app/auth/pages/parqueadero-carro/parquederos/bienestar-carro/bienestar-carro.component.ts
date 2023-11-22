import { Component } from '@angular/core';


@Component({
  selector: 'app-bienestar-carro',
  templateUrl: './bienestar-carro.component.html',
  styleUrls: ['./bienestar-carro.component.css']
})
export class BienestarCarroComponent {
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
