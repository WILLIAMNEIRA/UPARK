import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ParqueaderoCarroComponent } from './pages/parqueadero-carro/parqueadero-carro.component';
import { ParqueaderoMotoComponent } from './pages/parqueadero-moto/parqueadero-moto.component';
import { RegistrarVehiculoComponent } from './pages/registrar-vehiculo/registrar-vehiculo.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BloqueIComponent } from './pages/parqueadero-moto/parqueaderos/bloque-aulas/bloque-i.component';
import { CasonaComponent } from './pages/parqueadero-moto/parqueaderos/casona/casona.component';
import { LaboratoriosComponent } from './pages/parqueadero-moto/parqueaderos/laboratorios/laboratorios.component';
import { BienestarComponent } from './pages/parqueadero-moto/parqueaderos/Bienestar/bienestar.component';
import { LaboratoriosModalComponent } from './pages/Modal/Laboratorios/Laboratorios-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BienestarModalComponent } from './pages/Modal/Bienestar/Bienestar-modal.component';
import { BloqueAulasCarroComponent } from './pages/parqueadero-carro/parquederos/bloque-aulas-carro/bloque-aulas-carro.component';
import { CasonaCarroComponent } from './pages/parqueadero-carro/parquederos/casona-carro/casona-carro.component';
import { BienestarCarroComponent } from './pages/parqueadero-carro/parquederos/bienestar-carro/bienestar-carro.component';
import { AnexosCarroComponent } from './pages/parqueadero-carro/parquederos/anexos-carro/anexos-carro.component';
import { LaboratoriosCarroComponent } from './pages/parqueadero-carro/parquederos/laboratorios-carro/laboratorios-carro.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    ParqueaderoCarroComponent,
    ParqueaderoMotoComponent,
    RegistrarVehiculoComponent,
    BloqueIComponent,
    CasonaComponent,
    BienestarComponent,
    LaboratoriosModalComponent,
    LaboratoriosComponent,
    BienestarModalComponent,
    BloqueAulasCarroComponent,
    CasonaCarroComponent,
    BienestarCarroComponent,
    AnexosCarroComponent,
    LaboratoriosCarroComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
  ],
})
export class AuthModule {}
