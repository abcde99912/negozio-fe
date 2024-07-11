import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenvenutoComponent } from './pages/benvenuto/benvenuto.component';
import { ListaClientiComponent } from './pages/lista-clienti/lista-clienti.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreaClientiComponent } from './pages/crea-clienti/crea-clienti.component';
import { ModificaClientiComponent } from './pages/modifica-clienti/modifica-clienti.component';
import { DettagliClienteComponent } from './pages/dettagli-cliente/dettagli-cliente.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OrdiniComponent } from './pages/ordini/ordini.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BenvenutoComponent,
    ListaClientiComponent,
    LoginComponent,
    LogoutComponent,
    CreaClientiComponent,
    ModificaClientiComponent,
    DettagliClienteComponent,
    LandingPageComponent,
    OrdiniComponent,
    InventarioComponent,

  
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
