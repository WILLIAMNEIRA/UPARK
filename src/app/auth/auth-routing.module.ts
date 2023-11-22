import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ParqueaderoMotoComponent } from './pages/parqueadero-moto/parqueadero-moto.component';
import { ParqueaderoCarroComponent } from './pages/parqueadero-carro/parqueadero-carro.component';
import { RegistrarVehiculoComponent } from './pages/registrar-vehiculo/registrar-vehiculo.component';
import { BloqueIComponent } from './pages/parqueadero-moto/parqueaderos/bloque-aulas/bloque-i.component';
import { CasonaComponent } from './pages/parqueadero-moto/parqueaderos/casona/casona.component';
import { LaboratoriosComponent } from './pages/parqueadero-moto/parqueaderos/laboratorios/laboratorios.component';
import { BienestarComponent } from './pages/parqueadero-moto/parqueaderos/Bienestar/bienestar.component';
import { BienestarCarroComponent } from './pages/parqueadero-carro/parquederos/bienestar-carro/bienestar-carro.component';
import { AnexosCarroComponent } from './pages/parqueadero-carro/parquederos/anexos-carro/anexos-carro.component';
import { BloqueAulasCarroComponent } from './pages/parqueadero-carro/parquederos/bloque-aulas-carro/bloque-aulas-carro.component';
import { CasonaCarroComponent } from './pages/parqueadero-carro/parquederos/casona-carro/casona-carro.component';
import { LaboratoriosCarroComponent } from './pages/parqueadero-carro/parquederos/laboratorios-carro/laboratorios-carro.component';

const routes: Routes = [
 
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'motocicleta', component: ParqueaderoMotoComponent },
      { path: 'automovil', component: ParqueaderoCarroComponent },
      { path: 'registarVehiculo', component: RegistrarVehiculoComponent },
      { path: 'bloqueAulasMotos', component: BloqueIComponent},
      { path: 'casonaMotos', component: CasonaComponent},
      { path: 'laboratoriosMotos', component: LaboratoriosComponent},
      { path: 'bienestarMotos', component: BienestarComponent},
      { path: 'bloqueAulasCarro', component: BloqueAulasCarroComponent},
      { path: 'casonaCarro', component: CasonaCarroComponent},
      { path: 'laboratoriosCarro', component: LaboratoriosCarroComponent},
      { path: 'bienestarCarro', component: BienestarCarroComponent},
      { path: 'anexosCarro', component: AnexosCarroComponent},
      { path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
