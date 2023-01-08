import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PortfolioComponent } from '../componentes/portfolio/portfolio.component';
import { InicioSesionComponent } from '../componentes/inicio-sesion/inicio-sesion.component';

const routes:Routes = [{path:'portfolio',component: PortfolioComponent},

{path:'iniciarsesion',component: InicioSesionComponent},{path:'',redirectTo:'iniciarsesion',pathMatch:'full'}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],exports:[RouterModule]
})
export class AppRoutingModuleTsModule { }
