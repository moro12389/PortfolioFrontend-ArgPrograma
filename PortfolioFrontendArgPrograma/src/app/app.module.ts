import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPerfilComponent } from './componentes/mi-perfil/mi-perfil.component';
import { ComunicacionComponent } from './componentes/comunicacion/comunicacion.component';
import { ExperienciayProyectosComponent } from './componentes/experienciay-proyectos/experienciay-proyectos.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MiPerfilComponent,
    ComunicacionComponent,
    ExperienciayProyectosComponent,
    UsuarioComponent,
    InicioSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleTsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
